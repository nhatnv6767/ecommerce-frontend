import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="/register" element={<Register/>} exact/>
            </Routes>
        </Router>
    );
}

export default App;
