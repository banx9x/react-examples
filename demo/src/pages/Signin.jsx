import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { userSignin } from "../store/actions";

const Signin = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, error, user } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(userSignin(username, password));
    };

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {loading && <p>Đang đăng nhập</p>}

            {error && <p>{error}</p>}

            <div>
                <button type="submit">Sign me in</button>
            </div>
        </form>
    );
};

export default Signin;
