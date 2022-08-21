import {
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "antd/dist/antd.min.css"

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="/register" element={<Register/>} exact/>
            </Routes>
        </>
    );
}

export default App;
