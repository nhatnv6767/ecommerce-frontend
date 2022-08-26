import {
    Routes,
    Route,
} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete"
import ForgotPassword from "./pages/auth/ForgotPassword";

import {getAuth} from "firebase/auth";
import {app} from "./firebase"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {currentUser} from "./functions/auth";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";


const App = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch()

    // to check firebase auth state
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult()
                console.log("User (App.js): ", user)
                await currentUser((idTokenResult.token))
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
                        }
                    )
                    .catch(err => console.log(err))
            }
        })
        // cleanup
        return () => unsubcribe()
    }, [])

    return (
        <>
            <Header auth={auth}/>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/login" element={<Login auth={auth}/>} exact/>
                <Route path="/register" element={<Register auth={auth}/>} exact/>
                <Route path="/register/complete" element={<RegisterComplete auth={auth}/>} exact/>
                <Route path="/forgot/password" element={<ForgotPassword auth={auth}/>} exact/>
                <Route path="/user/history" element={<UserRoute auth={auth}/>} exact/>
            </Routes>
        </>
    );
}

export default App;
