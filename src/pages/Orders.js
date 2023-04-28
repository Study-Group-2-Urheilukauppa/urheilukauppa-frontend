import axios from 'axios';
import React, { useEffect, useState } from 'react';
import hostURL from '../Constants';

// URL address variable
const URL = hostURL + '/api/viewOrders.php';

function Orders() {
    const [orders, setOrders] = useState([]);

    //get data from backend
    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                // group orders by order number
                const groupedOrders = response.data.reduce((acc, order) => {
                    const existingOrder = acc.find(o => o.ordernum === order.ordernum);
                    if (existingOrder) {
                        existingOrder.orderRows.push(order);
                    } else {
                        acc.push({ ...order, orderRows: [order] });
                    }
                    return acc;
                }, []);
                // store data to orders useState
                setOrders(groupedOrders);
            })
            .catch(error => {
                alert(error);
            });
    }, []);

    // map results
    return (
        <main className="mx-20 mb-auto mt-20 bg-white grid justify-left w-600 respo">
            <div>
                <h1 className="text-2xl font-bold mb-4">Tilaukset</h1>
                {orders.map((order) => (
                    <div key={order.ordernum} className="border p-4 mb-4">
                        <p className="text-lg font-medium">Tilausnumero: {order.ordernum}</p>
                        <p className="text-lg font-medium">AsiakasID: {order.clientid}</p>
                        <p className="text-lg font-medium">TilausPvm: {order.orderdate}</p>
                        <p className="text-lg font-medium">Tila: {order.orderstate}</p>
                        {order.orderRows.map((row) => (
                            <div key={`${order.ordernum}-${row.rownum}`}><br />
                                <p className="text-lg font-medium">Tuotenumero: {row.productid}</p>
                                <p className="text-lg font-medium">Rivinumero: {row.rownum}</p>
                                <p className="text-lg font-medium">Kappalemäärä: {row.pcs}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Orders;