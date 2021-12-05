import { Table } from "react-bootstrap"
import Report3 from "../Entities/Report3";

interface TableReport3Props {
    reports: Report3[];
}
const Table1Report3 = (props: TableReport3Props) => {
    const { reports } = props
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Номер документа</th>
                    <th>Имя работника</th>
                    <th>Фамилия работника</th>
                    <th>Тип действия</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{report.documentNumber}</td>
                            <td>{report.workerFirstName}</td>
                            <td>{report.workersSecondName}</td>
                            <td>{report.actionType}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Table1Report3;