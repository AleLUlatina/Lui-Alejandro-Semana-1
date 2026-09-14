document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-sidebar');
    const barraLateral = document.querySelector('.barra-lateral');
    const overlay = document.getElementById('superposicion-movil');
    const closeBtn = document.querySelector('.boton-cerrar-barra');

    if (!toggleBtn || !barraLateral || !closeBtn) return;

    const setSidebarState = (open) => {
        barraLateral.classList.toggle('activo', open);
        if (overlay) {
            overlay.classList.toggle('activo', open);
        }
        toggleBtn.setAttribute('aria-expanded', String(open));
    };

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const shouldOpen = !barraLateral.classList.contains('activo');
        setSidebarState(shouldOpen);
    });

    closeBtn.addEventListener('click', () => setSidebarState(false));

    if (overlay) {
        overlay.addEventListener('click', () => setSidebarState(false));
    }

    document.addEventListener('click', (event) => {
        if (window.innerWidth > 768) return;
        if (!barraLateral.contains(event.target) && !toggleBtn.contains(event.target) && barraLateral.classList.contains('activo')) {
            setSidebarState(false);
        }
    });
});
