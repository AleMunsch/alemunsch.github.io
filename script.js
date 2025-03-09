document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    function setActiveLink(targetPage) {
        links.forEach(link => {
            const li = link.parentElement;
            if (link.getAttribute("href") === targetPage) {
                li.classList.add("active");
            } else {
                li.classList.remove("active");
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute("href");
            setActiveLink(targetPage);
            window.location.href = targetPage;
        });
    });

    // Définir le lien actif initial
    setActiveLink(window.location.pathname.split("/").pop());
});