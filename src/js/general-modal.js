(()=>{
    const refs = {
        modal: document.getElementById('modal-back'),
        close: document.querySelector('.modal-close'),
        openBtn1: document.querySelector('.ice-cream-card__btn1'),
        openBtn2: document.querySelector('.ice-cream-card__btn2'),
        openBtn3: document.querySelector('.ice-cream-card__btn3'),
    }
    refs.close.addEventListener('click', toggleModal);
    refs.openBtn1.addEventListener('click', toggleModal);
    refs.openBtn2.addEventListener('click', toggleModal);
    refs.openBtn3.addEventListener('click', toggleModal);

    function toggleModal(event) {
        event.preventDefault();
        refs.modal.classList.toggle('hidden');
    }
})();

// function toggleModal(event, modalId) {
//     // modalId = 'products-modal';
//     event.preventDefault();
//     const modal = document.getElementById(modalId);
//     modal.classList.toggle('hidden');
//     console.log(modalId)
// }
// showTest();