// import { Button } from '@material-ui/core';
// import React, { useState } from 'react';
// import './BottomPart.css';
// import {FaFacebook} from 'react-icons/fa';
// import {FcGoogle} from 'react-icons/fc'; 

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../Login/firebase.config';
// firebase.initializeApp(firebaseConfig);

// const BottomPart = () => {
    

//     const provider = new firebase.auth.GoogleAuthProvider();
//     const handleSignIn = () => {
//         firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             const {displayName} = res.user;
//             const signedInUser = {
//                 isSignedIn: true,
//                 name: displayName
//             }
//             setUser(signedInUser);
//             console.log(displayName);
//         })
//         .catch(error =>{
//             console.log(error);
//             console.log(error.message);
//         })
//     }
//     return (
//         <div className="bottomPart">
//             <p>-----------------------Or------------------------</p>
//             <Button> <FaFacebook/> Continue with Facebook</Button> <br/>
//             <Button onClick={handleSignIn}>  <FcGoogle/> Continue with Google </Button>
//         </div>
//     );
// };

// export default BottomPart;