import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {sortGroup} from '../store.js';
function Groups() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    const groupName = ["A", "B", "C", "D", "E", "F", "G", "H"];
    if (state.continueButton === 1) {
        dispatch(sortGroup());
    }
    return (
        <div>
        {
            state.countries.map((group, index) => {
                return (
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>{groupName[index]}</th>
                                <th>Country</th>
                                <th>Output</th>
                                <th>Output if tied</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{group[0].name}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{group[1].name}</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{group[2].name}</td>
                                <td>@twitter</td>
                                <td>sdsd</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{group[3].name}</td>
                                <td>@twitter</td>
                                <td>sdsd</td>
                            </tr>
                        </tbody>
                    </Table>
                )
            })
        }
        </div>

    )
}

export { Groups };