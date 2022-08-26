import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5)
    let history = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        })
        // redirect once count is equal to 0

        count === 0 && history("/")

        // cleanup
        return () => clearInterval(interval)
    }, [count])

    return (
        <div className="container p-5 text-center">
            <p>Redirecting you in {count} seconds</p>
        </div>
    );
};

export default LoadingToRedirect;
