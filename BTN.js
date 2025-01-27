document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementById("navbarToggler");
    const navbarNav = document.getElementById("navbarNav");

    toggler.addEventListener("click", () => {
        const isExpanded = toggler.getAttribute("aria-expanded") === "true";
        toggler.setAttribute("aria-expanded", !isExpanded);
        navbarNav.classList.toggle("show");
    });
});
