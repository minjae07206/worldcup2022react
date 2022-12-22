import { Table } from 'react-bootstrap';
import {useSelector } from 'react-redux';
function Groups() {
    let state = useSelector((state) => state);
    const groupName = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const space = " "
    return (
        <div className='group-standings'>
        {
            state.countries.map((group, index) => {
                return (
                    <div className='group-table'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>{groupName[index]}</th>
                                <th>Country</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${group[0].image}`}></img>{space + group[0].name}</td>
                                <td>{group[0].current}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${group[1].image}`}></img>{space + group[1].name}</td>
                                <td>{group[1].current}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${group[2].image}`}></img>{space + group[2].name}</td>
                                <td>{group[2].current}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${group[3].image}`}></img>{space + group[3].name}</td>
                                <td>{group[3].current}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                )
            })
        }
        </div>

    )
}

export { Groups };