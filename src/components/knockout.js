import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
function Knockout() {
    let state = useSelector((state) => state);

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
                                            <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.roundOf16Flags[index*2]}`}></img>{" " + state.knockout.roundOf16Countries[index * 2]}</td>
                                            <td>{state.knockout.roundOf16Results[index * 2]}</td>
                                        </tr>
                                        <tr>
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.roundOf16Flags[index*2+1]}`}></img>{" " + state.knockout.roundOf16Countries[index * 2 + 1]}</td>
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
                                            <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.quarterFinalsFlags[index*2]}`}></img>{" " + state.knockout.quarterFinalsCountries[index * 2]}</td>
                                            <td>{state.knockout.quarterFinalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.quarterFinalsFlags[index*2+1]}`}></img>{" " + state.knockout.quarterFinalsCountries[index * 2+1]}</td>
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
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.semiFinalsFlags[index*2]}`}></img>{" " + state.knockout.semiFinalsCountries[index * 2]}</td>
                                            <td>{state.knockout.semiFinalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.semiFinalsFlags[index*2+1]}`}></img>{" " + state.knockout.semiFinalsCountries[index * 2+1]}</td>
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
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.finalsFlags[index*2]}`}></img>{" " + state.knockout.finalsCountries[index * 2]}</td>
                                            <td>{state.knockout.finalsResults[index * 2]}</td>
                                        </tr>
                                        <tr>
                                        <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.finalsFlags[index*2+1]}`}></img>{" " + state.knockout.finalsCountries[index * 2+1]}</td>
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
                <div className='single-table' style={{width: '130px'}}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><img className="imagelogo" src={`${process.env.PUBLIC_URL}/flags/${state.knockout.winnerFlag}`}></img>{" " + state.knockout.winnerCountry[0]}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export { Knockout }