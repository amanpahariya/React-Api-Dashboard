import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TableView from './tabelview';



function DashBoard() {
    const token = "tTU3gFVUdP";
    const email = "t.raman@iiitmanipur.ac.in";
    let DEL = []
    let INT = []
    let OOD = []
    let DEX = []
    let NFI = []
    const [apiData, setApiData] = useState([]);
    const [filter, setFilter] = useState('DEL');
    const [shipments, setShipment] = useState([]);
    const [scans, setScan] = useState([]);
    useEffect(() => {
        Axios.post(' https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
            {
                email: email
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                for (let count = 0; count < res.data.length; count++) {
                    if (res.data[count]["current_status_code"] === 'DEL') {
                        DEL.push(res.data[count]);
                    }
                    else if (res.data[count]["current_status_code"] === 'INT') {
                        INT.push(res.data[count]);
                    }
                    else if (res.data[count]["current_status_code"] === 'OOD') {
                        OOD.push(res.data[count]);
                    }
                    else if (res.data[count]["current_status_code"] === 'DEX') {
                        DEX.push(res.data[count]);
                    }
                    else if (res.data[count]["current_status_code"] === 'NFI') {
                        NFI.push(res.data[count]);
                    }

                }
                setShipment(DEL);
                if (DEL.length > 0) {
                    setScan(DEL[0]["scan"])
                }
                setApiData(res.data);
            });
        
    },[]);
    for (let count = 0; count < apiData.length; count++) {
        if (apiData[count]["current_status_code"] === 'DEL') {
            DEL.push(apiData[count]);
        }
        else if (apiData[count]["current_status_code"] === 'INT') {
            INT.push(apiData[count]);
        }
        else if (apiData[count]["current_status_code"] === 'OOD') {
            OOD.push(apiData[count]);
        }
        else if (apiData[count]["current_status_code"] === 'DEX') {
            DEX.push(apiData[count]);
        }
        else if (apiData[count]["current_status_code"] === 'NFI') {
            NFI.push(apiData[count]);
        }

    }
    const DELFILTER = e => {
        if (DEL.length > 0) {
            setScan(DEL[0]["scan"])
        }
        setShipment(DEL);
        setFilter('DEL');
    }
    const INTFILTER = e => {
        if (INT.length) {
            setScan(INT[0]["scan"]);
        }
        setShipment(INT);
        setFilter('INT');
    }
    const OODFILTER = e => {
        if (OOD.length) {
            setScan(OOD[0]["scan"]);
        }
        setShipment(OOD);
        setFilter('OOD');
    }
    const DEXFILTER = e => {
        if (DEX.length > 0) {
            setScan(DEX[0]["scan"]);
        }
        setShipment(DEX);
        setFilter('DEX');
    }
    const NFIFILTER = e => {
        if (NFI[0]["scan"]) {
            setScan(NFI[0]["scan"]);
        }
        setFilter("NFI");
        setShipment(NFI);
    }
    return (
        <>
            <div className='d-flex filter'>
                <div className={filter === 'DEL' ? "filter-item active" : "filter-item"} onClick={DELFILTER}>
                    <p>DEL</p>
                    <p>{DEL.length}</p>
                </div>
                <div className={filter === 'INT' ? "filter-item active" : "filter-item"} onClick={INTFILTER}>
                    <p>INT</p>
                    <p>{INT.length}</p>
                </div>
                <div className={filter === 'OOD' ? "filter-item active" : "filter-item"} onClick={OODFILTER}>
                    <p>OOD</p>
                    <p>{OOD.length}</p>
                </div>
                <div className={filter === 'DEX' ? "filter-item active" : "filter-item"} onClick={DEXFILTER}>
                    <p>DEX</p>
                    <p>{DEX.length}</p>
                </div>
                <div className={filter === 'NFI' ? "filter-item active" : "filter-item"} onClick={NFIFILTER}>
                    <p>NFI</p>
                    <p>{NFI.length}</p>
                </div>
            </div>
            <TableView data={{ shipments: shipments, scans: scans }} />
        </>
    );
}

export default DashBoard;