class Task {
    constructor() {
        this.BASE_API = "https://bnx-todo.herokuapp.com/api/tasks";
    }

    getTasks = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            return Promise.reject();
        }

        return fetch(this.BASE_API, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status) {
                    return res.data;
                } else {
                    return Promise.reject(res.error);
                }
            });
    };
}

export default new Task();
