import React from 'react';
import { Link } from 'react-router-dom';
import BottomPart from '../BottomPart/BottomPart';
import WhiteHeader from '../WhiteHeader/WhiteHeader';
import './Login.css';

import { Button } from '@material-ui/core';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'; 

const Login = () => {
    return (
        <div>
            <div>
                <WhiteHeader></WhiteHeader>
            </div>
            <div className="login__area">
                <h1>Login</h1>
                <form>
                <input type="text" placeholder="Email"/> <br/><hr/>
                <input type="password" placeholder="Password"/> <br/><hr/>
                <input className="loginBtn" type="submit" value="Login"/>
                </form> 
                <p>Don't have an account? <Link to="/signin">Create an account</Link> </p>
            </div>
            <div className="bottomPart">
                <p>-----------------------Or------------------------</p>
                <Button> <FaFacebook/> Continue with Facebook</Button> <br/>
                <Button > <FcGoogle/> Continue with Google </Button>
            </div>
        </div>
    );
};

export default Login;