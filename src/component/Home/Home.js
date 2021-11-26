import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../Assets/images/banner.jpg'
import Customer from '../Customer/Customer';
import Guide from '../Guide/Guide';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="img-wrapper">
                <img className="img-responsive"
                    src={banner1} alt='' />
                <div className="img-overlay">
                    <Link to='/services'><button className="btn btn-md btn-success">Explore</button></Link>
                </div>
            </div>
            <Services />
            {/* Extra two section */}
            <Guide />
            <Customer />
        </div>
    );
};

export default Home;