// Marcar el botón activo según la página
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.dataset.page; // usamos data-page en body
    document.querySelectorAll("nav.page-buttons a").forEach(a => {
        if(a.dataset.page === currentPage) {
            a.classList.add("active");
        }
    });
});
