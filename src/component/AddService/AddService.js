import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'



const AddService = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)

        fetch('https://polar-atoll-67991.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("service added")
                reset()
            })
    };






    return (
        <div className='container add-service'>
            <div>
                <h1><span className="text-primary">Add</span> A <span className="text-danger">Service</span></h1>
            </div>

            <div >
                <div>
                    <form className="shipping-form service" onSubmit={handleSubmit(onSubmit)}>


                        <div>

                            <input placeholder="Service Name" defaultValue="" {...register("name")} required />
                        </div>
                        <div>
                            <input placeholder="Description" defaultValue="" {...register("description")} required />
                        </div>
                        <div>
                            <input placeholder="Image URL" defaultValue="" {...register("img")} required />
                        </div>

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;