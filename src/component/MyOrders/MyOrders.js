import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ShowOrders from '../ShowOrders/ShowOrders';

const MyOrders = () => {


    const [myOrders, setMyOrders] = useState([])
    const { user } = useAuth();
    const showBtn = false;

    useEffect(() => {
        fetch('https://polar-atoll-67991.herokuapp.com/orders/manageall')
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [])

    const check = myOrders.filter(myOrder => myOrder.email == user.email)

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
                        const remainingUsers = myOrders.filter((user) => user._id !== _id);
                        setMyOrders(remainingUsers);
                    }
                });

        }
    }

    return (
        <div className='container my-5'>

            {
                check?.map(order => <ShowOrders key={order._id} order={order} handleDelete={handleDelete} showBtn={showBtn}></ShowOrders>)
            }


        </div>
    );
};

export default MyOrders;