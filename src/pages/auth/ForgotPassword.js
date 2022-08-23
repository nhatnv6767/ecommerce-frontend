import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ForgotPassword = ({auth}) => {
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
            handleCodeInApp: true,
        }
        await sendPasswordResetEmail(auth, email, config)
            .then(() => {
                setEmail("")
                setLoading(false)
                toast.success("Check your email for password reset link")
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err.message)
                console.log("ERROR MSG IN FORGOT PASSWORD", err)
            })
    }

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {
                loading
                    ? (<h4 className="text-danger">Loading</h4>)
                    : (<h4>Forgot Password</h4>)
            }
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    autoFocus
                />
                <br/>
                <button className="btn btn-raised" disabled={!email}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword;