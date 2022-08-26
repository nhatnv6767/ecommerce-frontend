import {
    Link,
    Route,
} from "react-router-dom";
import {useSelector} from "react-redux";
import History from "../../pages/user/History";

const UserRoute = ({auth}) => {

    const {user} = useSelector(state => ({...state}))

    return (
        user && user.token
            ? (
                <History auth={auth}/>
            )
            : (
                <>
                    <h1 className="text-danger">Loading...</h1>
                </>
            )
    );
};

export default UserRoute;
