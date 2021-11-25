import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../store/actions";

const Layout = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <header className="App-header"></header>

            <Outlet />
        </div>
    );
};

export default Layout;
