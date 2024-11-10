import React, { useEffect, useState } from 'react'

function CasesTime() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);

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
                <h1 style={head1}>India Covid 19 Dashboard </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Dailyconfirmed</th>
                            <th>Dailydeceased</th>
                            <th>Dailyrecovered</th>
                            <th>Date</th>
                            <th>Totalconfirmed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i) => {
                                return (
                                    <tr>
                                        <td>{i.dailyconfirmed}</td>
                                        <td>{i.dailydeceased}</td>
                                        <td>{i.dailyrecovered}</td>
                                        <td>{i.date}</td>
                                        <td>{i.dateymd}</td>
                                        <td>{i.totalconfirmed}</td>
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

export default CasesTime;
