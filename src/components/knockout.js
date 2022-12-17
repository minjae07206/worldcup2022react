import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
function Knockout() {
    let state = useSelector((state) => state);
    console.log(state.knockout);
    return (
        <div className="knockout-table">
            {
                state.knockout.roundOf16.map((match, index) => {
                    return (
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Output</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{state.knockout.roundOf16Countries[index*2]}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>{state.knockout.roundOf16Countries[index*2+1]}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    )
                })
            }
        </div>
    )
}

export { Knockout }