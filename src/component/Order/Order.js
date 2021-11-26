import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Order.css'


const Order = () => {
    const { serviceId } = useParams();
    const { services } = useServices();

    let serviceToShow = services?.filter(service => service._id == serviceId)
    // console.log("details of", serviceToShow)


    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {

        const savedCart = serviceToShow;
        data.cart = savedCart;
        fetch('https://polar-atoll-67991.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("order placed")
                reset()
            })
    };

    return (
        <div className='container my-5 order'>

            <div className="row">
                <h1 className="mb-5">Boo<span className="text-danger">king</span></h1>
                <div className="col col-md-6">

                    <div className="card mb-3">
                        <img src={serviceToShow[0]?.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{serviceToShow[0]?.name}</h5>
                            <p className="card-text">{serviceToShow[0]?.description}</p>

                        </div>
                    </div>
                </div>
                <div className="col col-md-6 my-5">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "rgb(236, 234, 234)" }}>

                        <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />

                        <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                        {errors.email && <span className="error">This field is required</span>}

                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Order;