import React, { useEffect, useState } from 'react';
function Tested() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.tested);
        setData(actualData.tested);
    }
    useEffect(() => {
        getCovidData();
    }, []);
    const head1 = {
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    } 
    return (
        <>
            <div>
                <h1 style={head1}>India Covid 19 Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Total individuals tested</th>
                            <th>Total positive cases</th>
                            <th>Total Samples Tested</th>
                            <th>Tested as of</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i) => {
                                return (
                                    <tr>
                                        <td>{i.totalindividualstested}</td>
                                        <td>{i.totalpositivecases}</td>
                                        <td>{i.totalsamplestested}</td>
                                        <td>{i.testedasof}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Tested;
