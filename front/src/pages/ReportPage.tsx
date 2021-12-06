import { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { getReport1, getReport2, getReport3 } from "../api";
import Table1Report1 from "../components/TableReport1";
import Table1Report2 from "../components/TableReport2";
import Table1Report3 from "../components/TableReport3";
import Report1 from "../Entities/Report1";
import Report2 from "../Entities/Report2";
import Report3 from "../Entities/Report3";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ReportPage = () => {
    const { role } = useTypedSelector(state => state.user)
    const [reports1, setReports1] = useState<Report1[]>([])
    const [reports2, setReports2] = useState<Report2[]>([])
    const [reports3, setReports3] = useState<Report3[]>([])
    const [reportsToShow, setReportsToShow] = useState<number>(1)

    useEffect(() => {
        getReport1().then(data => {
            setReports1(data);
        }).catch(err => console.log(err)
        )
        getReport2().then(data => {
            setReports2(data);
        }).catch(err => console.log(err)
        )
        getReport3().then(data => {
            setReports3(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])

    const handleClickShowReport1 = () => {
        setReportsToShow(1);
    }
    const handleClickShowReport2 = () => {
        setReportsToShow(2);
    }
    const handleClickShowReport3 = () => {
        setReportsToShow(3);
    }

    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey="/home">
                {(role === "ARCHIVE" || role === "WORKER" || role === "ADMIN") && <Nav.Item>
                    <Nav.Link onClick={handleClickShowReport1} >Список архивных документов</Nav.Link>
                </Nav.Item>}
                {(role === "ARCHIVE" || role === "ADMIN") && <Nav.Item>
                    <Nav.Link onClick={handleClickShowReport2}>Список архивных документов, находящихся на руках</Nav.Link>
                </Nav.Item>}
                {(role === "ARCHIVE" || role === "ADMIN") && <Nav.Item>
                    <Nav.Link onClick={handleClickShowReport3}>
                        Журнал регистрации выдачи и возврата документов
                    </Nav.Link>
                </Nav.Item>
                }
            </Nav>
            {reportsToShow === 1 && <Table1Report1 reports={reports1} />}
            {reportsToShow === 2 && <Table1Report2 reports={reports2} />}
            {reportsToShow === 3 && <Table1Report3 reports={reports3} />}
        </Container>
    )
}

export default ReportPage;