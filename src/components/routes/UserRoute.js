import {
    Link,
    Route,
} from "react-router-dom";
import {useSelector} from "react-redux";
import History from "../../pages/user/History";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({auth}) => {

    const {user} = useSelector(state => ({...state}))

    return (
        user && user.token
            ? (
                <History auth={auth}/>
            )
            : (
                <LoadingToRedirect/>
            )
    );
};

export default UserRoute;
