import React, { useEffect, useState } from 'react';
import ShowOrders from '../ShowOrders/ShowOrders';


const ManageAllOrders = (props) => {


    const [allOrders, setAllOrders] = useState([])
    const [isStatus, setIsStatus] = useState(true);
    const showBtn = true;
    useEffect(() => {
        fetch('https://polar-atoll-67991.herokuapp.com/orders/manageall')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])


    const handleDelete = (_id) => {
        const proced = window.confirm('Are you sure, you want to delete?')
        if (proced) {

            const url = `https://polar-atoll-67991.herokuapp.com/orders/delete/${_id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted SuccessFully");
                        const remainingUsers = allOrders.filter((user) => user._id !== _id);
                        setAllOrders(remainingUsers);
                    }
                });


        }
    }

    // handleStatus here



    const handleStatus = (_id) => {

        // setStatus(true);
        const url = `https://polar-atoll-67991.herokuapp.com/status/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ isStatus })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    alert("Status Updated")
                    const remainingUsers = allOrders.filter((user) => user._id !== _id);
                    const upDatedUser = allOrders.find((order) => order._id === _id)
                    upDatedUser.status = true
                    setAllOrders([...remainingUsers, upDatedUser]);

                }
            })

    }






    return (
        <div className="my-5 container">
            {
                allOrders?.map(orders => <ShowOrders key={orders._id} order={orders} handleDelete={handleDelete} handleStatus={handleStatus} showBtn={showBtn} ></ShowOrders>)
            }

        </div>
    );
};

export default ManageAllOrders;