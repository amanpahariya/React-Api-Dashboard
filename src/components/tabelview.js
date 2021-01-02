import React from 'react';
import destinationimage from '../destination.svg'
import house from '../warehouse.svg'
import moment from 'moment';



function TableView(props) {
    let shipments = props.data.shipments;
    let scans = props.data.scans;
    return <>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col table-left">
                    <div className="border p-3 m-2">
                        <img className='destination' src={destinationimage} />
                        <div className='table-left-1'>
                            <ul className='scan'>
                                {scans.map(scan => (
                                    <li className={scan.status_detail === "DELIVERED" ? "scan-list delivered" : "scan-list"}>
                                        <div className='d-flex align-items-center'>
                                            <div className="line" />
                                            <ul className="my-1 w-100 scan-list-item d-flex">
                                                <li>{scan.location}</li>
                                                <li>{moment.utc(scan.time).local().format("DD-MM-YYYY")}</li>
                                                <li>{moment.utc(scan.time).local().format("HH:mm")}</li>
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img className='house' src={house} />
                    </div>
                </div>
                <div className="col table-right border p-2">
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">AWB NUMBER</th>
                                    <th scope="col">TANSPORTER</th>
                                    <th scope="col">SOURCE</th>
                                    <th scope="col">DESTINATION</th>
                                    <th scope="col">BRAND</th>
                                    <th scope="col">STARTDATE</th>
                                    <th scope="col">ETD</th>
                                    <th scope="col">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shipments.map(shipment => (
                                    <tr>
                                        <td>#{shipment.awbno}</td>
                                        <td>{shipment.carrier}</td>
                                        <td>{shipment.from}</td>
                                        <td>{shipment.to}</td>
                                        <td>{shipment.carrier}</td>
                                        <td>{moment.utc(shipment.pickup_date).local().format("DD/MM/YYYY")}</td>
                                        <td>{shipment.extra_fields ? moment.utc(shipment.extra_fields.expected_delivery_date).local().format("DD/MM/YYYY") : ""}</td>
                                        <td className={shipment.current_status === "Delivered" ? "status" : ''}>{shipment.current_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TableView;