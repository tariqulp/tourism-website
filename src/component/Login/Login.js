import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'

const Login = () => {
    // distructuring data from context
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const reDirect_uri = location.state?.from || '/';

    // Google Authentication Login
    const handleGoogleLogIn = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(reDirect_uri)
            })
            .finally(() => setIsLoading(false))

    }
    return (
        <div>
            <h1 className="text-success my-5">Goo<span className="text-warning">gle</span> <span className="text-danger">Sign<span className="text-primary">In</span></span></h1>
            <Button onClick={handleGoogleLogIn} variant="primary">Google Sign in</Button>

        </div>
    );
};

export default Login;