import axios from 'axios';
import React, { useEffect, useState } from 'react';

// URL address variable
const URL = 'http://localhost:3000/viewOrders.php';

function Orders() {
    const [order, setOrder] = useState([]);

    //get data from backend
    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                // store data to order useState
                setOrder(response.data);
            })
            .catch(error => {
                alert(error);
            });
    }, []);

    // map results
    return (
        <main className="mx-20 mb-auto mt-20 bg-white grid justify-left w-600">
            <div>
                <h1 className="text-2xl font-bold mb-4">Tilaukset</h1>              
                {order.map((item) => (
                    <div key={item.ordernum} className="border p-4 mb-4">
                        <p className="text-lg font-medium">AsiakasID: {item.clientid}</p>
                        <p className="text-lg font-medium">TilausPvm: {item.orderdate}</p>
                        <p className="text-lg font-medium">Tila: {item.orderstate}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Orders;


