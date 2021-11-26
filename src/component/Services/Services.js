import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://polar-atoll-67991.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container card-holder'>
            <h1 className='my-5'>Our <span className='text-danger'>Destinations</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services?.map(service => <Service key={service._id} service={service} />)
                }
            </Row>
        </div>
    );
};

export default Services;