import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {toast} from "react-toastify"
import {useSelector} from "react-redux";
