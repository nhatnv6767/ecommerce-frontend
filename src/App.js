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

import {getAuth} from "firebase/auth";
import {app} from "./firebase"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import async from "async";


const App = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch()

    // to check firebase auth state
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult()
                console.log("User (App.js): ", user)
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        name: "Noone",
                    }
                })
            }
        })
        // cleanup
        return () => unsubcribe()
    }, [])

    return (
        <>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="/register" element={<Register/>} exact/>
                <Route path="/register/complete" element={<RegisterComplete/>} exact/>
            </Routes>
        </>
    );
}

export default App;
