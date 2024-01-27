const Router = {
    init: () => {
        const navlink = document.querySelectorAll('a.navlink');
        navlink.forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url)
            });
        });
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false);
        });
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({route}, "", route)
        }
        // Def Page Element Rendered to DOM
        let pageElement = null;
        switch (route) {
            case "/":
                //TO Rendered Elements
                pageElement = document.createElement('div');
                pageElement.classList.add("main-content");

                const heading = document.createElement('h1');
                heading.textContent = "Willkommen auf Home";

                const text = document.createElement('p');
                text.textContent = "Das ist nur ein kleiner test Text"

                pageElement.appendChild(heading)
                pageElement.appendChild(text)
                break

            case "/main":
                pageElement = document.createElement('div');
                pageElement.classList.add("main-content");

                const heading2 = document.createElement('h1');
                heading2.textContent = "Das ist die Mainpage";

                const text2 = document.createElement('p');
                text2.textContent = "Und hier der Main Text";

                pageElement.appendChild(heading2)
                pageElement.appendChild(text2)
                break
            case "/contact":
                pageElement = document.createElement('div');
                pageElement.classList.add("main-content");

                const heading3 = document.createElement('h1');
                heading3.textContent = "Hier ist der Kontakt";

                const text3 = document.createElement('p');
                text3.textContent = "Bla Blub Schalala";

                pageElement.appendChild(heading3)
                pageElement.appendChild(text3)
                break
        }
        //Resets InnerHTML of Main
        if (pageElement) {
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.screenX = 0;
            window.screenY = 0;
        }
    }
}

export default Router