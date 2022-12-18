import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
function Knockout() {
    let state = useSelector((state) => state);
    console.log(state.knockout);
    return (
        <div className="knockout-table">
            <div>
                {
                    state.knockout.quarterFinalsCountries.map((match, index) => {
                        return (
                            <div className='single-table'>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{state.knockout.roundOf16Countries[index * 2]}</td>
                                            <td>{state.knockout.roundOf16Results[index * 2]}</td>
                                        </tr>
                                        <tr>
                                            <td>{state.knockout.roundOf16Countries[index * 2 + 1]}</td>
                                            <td>{state.knockout.roundOf16Results[index * 2 + 1]}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    })
                }
            </div>
            <div className="round-table">
                {
                    state.knockout.semiFinalsCountries.map((match, index) => {
                        return (
                            <div className="single-table">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{state.knockout.quarterFinalsCountries[index * 2]}</td>
                                            <td>{state.knockout.quarterFinalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                            <td>{state.knockout.quarterFinalsCountries[index * 2 + 1]}</td>
                                            <td>{state.knockout.quarterFinalsResults[index * 2 + 1]}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    })
                }
            </div>
            <div className="round-table">
                {
                    state.knockout.finalsCountries.map((match, index) => {
                        return (
                            <div className='single-table'>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{state.knockout.semiFinalsCountries[index * 2]}</td>
                                            <td>{state.knockout.semiFinalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                            <td>{state.knockout.semiFinalsCountries[index * 2 + 1]}</td>
                                            <td>{state.knockout.semiFinalsResults[index * 2 + 1]}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    })
                }
            </div>
            <div className="round-table">
                {
                    state.knockout.winnerCountry.map((match, index) => {
                        return (
                            <div className='single-table'>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{state.knockout.finalsCountries[index * 2]}</td>
                                            <td>{state.knockout.finalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                            <td>{state.knockout.finalsCountries[index * 2 + 1]}</td>
                                            <td>{state.knockout.finalsResults[index * 2 + 1]}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    })
                }
            </div>
            <div className="round-table">
                <div className='single-table'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.knockout.winnerCountry[0]}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export { Knockout }