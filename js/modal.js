document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('cookie-modal');
    const openModalButton = document.getElementById('open-modal');
    const closeButton = document.querySelector('.close-button');

    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
