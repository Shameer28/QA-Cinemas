import Table from 'react-bootstrap/Table';
import './OpeningTimesPage.css';

const Tables = () => {
    return (
        <div>
            <Table striped bordered hover size="sm" variant="dark" style={{ backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                <thead>
                    <tr>
                        <th><u>Days</u></th>
                        <th><u>Opening Hours</u></th>
                        <th><u>Bank Holiday Hours</u></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MONDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM</td>
                    </tr>
                    <tr>
                        <td>TUESDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM</td>
                    </tr>
                    <tr>
                        <td>WEDNESDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM</td>
                    </tr>
                    <tr>
                        <td>THURSDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM</td>
                    </tr>
                    <tr>
                        <td>FRIDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM</td>
                    </tr>
                    <tr>
                        <td>SATURDAY</td>
                        <td>10AM - 11PM</td>
                        <td>12PM - 10PM </td>
                    </tr>
                    <tr>
                        <td>SUNDAY</td>
                        <td>12PM - 10PM</td>
                        <td>CLOSED</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}

export default Tables;