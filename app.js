import Router from "./services/router.js";

window.app = {};
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
    app.router.init()
});