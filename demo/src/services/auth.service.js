class Auth {
    constructor() {
        this.BASE_API = "https://bnx-todo.herokuapp.com/api/auth";
    }

    getUserInfo() {
        const token = localStorage.getItem("token");

        if (!token) return Promise.reject();

        return fetch(this.BASE_API + "/user", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status) {
                    return res.data;
                } else {
                    localStorage.removeItem("token");
                    return Promise.reject(res.error);
                }
            });
    }

    userSignin(username, password) {
        return fetch(this.BASE_API + "/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => {
                const token = res.headers.get("Authorization");

                if (token) {
                    localStorage.setItem("token", token.split(" ")[1]);
                }

                return res.json();
            })
            .then((res) => {
                if (res.status) {
                    return res.data;
                } else {
                    return Promise.reject(res.error);
                }
            });
    }
}

export default new Auth();
