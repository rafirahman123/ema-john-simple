import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    // console.log('came form', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" placeholder="Your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john?? <Link to="/register">Create account</Link> </p>
                <div>-------------------or-----------------</div>
                <button className="cart-button" onClick={handleGoogleLogin}>Google Signin</button>
            </div>
        </div>
    );
};

export default Login;