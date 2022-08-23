import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {toast} from "react-toastify"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ForgotPassword = ({auth}) => {
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            form to get user email
        </div>
    )
}

export default ForgotPassword;