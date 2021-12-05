import { Table } from "react-bootstrap"
import Report2 from "../Entities/Report2";

interface TableReport2Props {
    reports: Report2[];
}
const Table1Report2 = (props: TableReport2Props) => {
    const { reports } = props;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Номер документа</th>
                    <th>Имя автора</th>
                    <th>Фамилия автора</th>
                    <th>Название</th>
                    <th>Название организации</th>
                    <th>количество страниц</th>
                    <th>Тип</th>
                    <th>Год</th>
                    <th>Имя работника</th>
                    <th>Фамилия работника</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{report.number}</td>
                            <td>{report.firstNameAuthor}</td>
                            <td>{report.secondNameAuthor}</td>
                            <td>{report.name}</td>
                            <td>{report.organizationName}</td>
                            <td>{report.pageCount}</td>
                            <td>{report.type}</td>
                            <td>{report.year}</td>
                            <td>{report.workerFirstName}</td>
                            <td>{report.workersSecondName}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Table1Report2;