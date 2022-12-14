import React, {useEffect, useState} from 'react';
// import {auth} from "../../firebase"
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {toast} from "react-toastify"
import {Button} from "antd";
import {GoogleOutlined, MailOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {createOrUpdateUser} from "../../functions/auth"

const Login = ({auth}) => {

    const provider = new GoogleAuthProvider();
    const history = useNavigate()
    const [email, setEmail] = useState("nhatnvse90183@gmail.com");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(state => ({...state}))

    useEffect(() => {
        if (user && user.token) history("/")
    }, [user])

    let dispatch = useDispatch()
    const roleBasedRedirect = (res) => {
        if (res.data.role === "admin") {
            history("/admin/dashboard")
        } else {
            history("/user/history")
        }
    }
    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            console.log(result)
            const {user} = result;
            const idTokenResult = await user.getIdTokenResult()

            await createOrUpdateUser((idTokenResult.token))
                .then(
                    res => {
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                            }
                        })
                        roleBasedRedirect(res)
                    }
                )
                .catch(err => console.log(err))

            // history('/')
        } catch (e) {
            //
            console.log(e)
            toast.error(e.message)
            setLoading(false)
        }
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                const {user} = result;
                const idTokenResult = await user.getIdTokenResult()
                await createOrUpdateUser((idTokenResult.token))
                    .then(
                        res => {
                            dispatch({
                                type: "LOGGED_IN_USER",
                                payload: {
                                    name: res.data.name,
                                    email: res.data.email,
                                    token: idTokenResult.token,
                                    role: res.data.role,
                                    _id: res.data._id,
                                }
                            })
                            roleBasedRedirect(res)
                        }
                    )
                    .catch(err => console.log(err))
                // history('/')

            }).catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }

    const loginForm = () =>
        (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email"
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Your password"
                    />
                </div>
                <br/>
                <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="mb-3"
                    block
                    shape="round"
                    icon={<MailOutlined/>}
                    size="large"
                    disabled={!email || password.length < 6}
                >
                    Login with Email/Password
                </Button>
            </form>
        )

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {
                        loading
                            ? (<h4 className="text-danger">Loading..</h4>)
                            : (<h4>Login</h4>)
                    }
                    {loginForm()}

                    <Button
                        onClick={googleLogin}
                        type="danger"
                        className="mb-3"
                        block
                        shape="round"
                        icon={<GoogleOutlined/>}
                        size="large"
                    >
                        Login with Google
                    </Button>

                    <Link to="/forgot/password" className="float-end text-danger">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
