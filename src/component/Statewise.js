import React, { useEffect, useState } from "react";

function Statewise() {
    const [ data, setData] = useState([]);
    const getCovidData= async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
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
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i) => {
                                return (
                                    <tr>
                                        <td>{i.state}</td>
                                        <td>{i.confirmed}</td>
                                        <td>{i.recovered}</td>
                                        <td>{i.deaths}</td>
                                        <td>{i.active}</td>
                                        <td>{i.lastupdatedtime}</td>
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
export default Statewise;