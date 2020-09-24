import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import BottomPart from '../BottomPart/BottomPart';
import WhiteHeader from '../WhiteHeader/WhiteHeader';
import './SignIn.css';

import { Button } from '@material-ui/core';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'; 

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const SignIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        fname: '',
        // lname: '',
        password: '',
        error: '',
        success: false
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName
            }
            setUser(signedInUser);
            console.log(displayName);
        })
        .catch(error =>{
            console.log(error);
            console.log(error.message);
        })
    }

    const handleFbSignIn = () =>{
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const handleBlur = (e) => {
        let isFormValid = true ;

        if(e.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }  
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);              
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }

        e.preventDefault();
    }
    

    return (
        <div>
            <div>
                <WhiteHeader></WhiteHeader>
            </div>
            <div className="signIn__area">
                <div className="checkBox">
                    <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser"/>
                    <label htmlFor="newUser">New User</label>
                </div>
                <h1> {newUser ? 'Create an account' : 'Login'}</h1>
                {/* <p>First Name:{user.fname}</p>
                <p>Last Name:{user.lname}</p>
                <p> Email: {user.email}</p>
                <p> Password : {user.password}</p> */}
               <form onSubmit={handleSubmit}>
            { newUser &&  <input type="text" name="fname"  onBlur={handleBlur} placeholder="Your Full Name" /> } <br/> <hr/>
                    {/* <input type="text" name="lname" onBlur={handleBlur} placeholder="Last Name" />  <br/> <hr/> */}
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Email" required /><br/> <hr/>
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required/> <br/> <hr/>
                    {/* <input type="password" name="confirmP" placeholder="Confirm Password" /> <br/>  <hr/> */}
                    <input className="accountBtn" type="submit" value={newUser ? 'Create Account' : 'Login'} />
                    {/* <button className="accountBtn"> Create an account </button> <br/> */}
                    <p style={{color:'red'}} > {user.error} </p>   
                    {user.success && <p style={{color:'green'}} > User {newUser ? 'Created' : 'Logged In'} Successfully! </p>  } 
                </form>
                {/* <p>Already have an account? <Link to="/login">Login</Link></p> */}
            </div>
            <div className="bottomPart">
                <p>-----------------------Or------------------------</p>
                <Button onClick={handleFbSignIn}> <FaFacebook/> Continue with Facebook</Button> <br/>
                <Button onClick={handleSignIn}>  <FcGoogle/> Continue with Google </Button>
            </div>
        </div>
    );

};
export default SignIn;