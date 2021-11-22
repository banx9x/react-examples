const main = document.querySelector("main");
const links = document.querySelectorAll("li a");

const home = () => `<h1>Homepage</h1>`;
const about = () => `<h1>Aboutpage</h1>`;
const notfound = () => `<h1>Page Not Found</h1>`;

const routes = {
    "/": home,
    "/about": about,
};

const render = () => {
    const route = new URL(location.href).pathname;

    if (route in routes) {
        main.innerHTML = routes[route]();
    } else {
        main.innerHTML = notfound();
    }
};

// Hiển thị nội dung khi bấm nút back/forward
window.onpopstate = history.onpushstate = (e) => {
    render();
};

links.forEach((a) => {
    a.onclick = (e) => {
        e.preventDefault();

        const route = a.getAttribute("href");
        history.pushState({}, null, route);

        render();
    };
});

render();
