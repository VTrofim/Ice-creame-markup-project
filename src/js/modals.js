
// type module;
//     const refs = {
//         modal: document.querySelector('[data-modal]'),
//         close: document.querySelector('[data-modal-close]'),
//         open: document.querySelector('[data-modal-open]'),
//     }
//     refs.close.addEventListener('click', toggleModal);
//     refs.open.addEventListener('click', toggleModal);

//     function toggleModal(event) {
//         event.preventDefault();
//         refs.modal.classList.toggle('hidden');
//     }
// })();

// function toggleModal(event, modalId){
//   event.preventDefault();
//   const modal = document.getElementById(modalId);
//   modal.classList.toggle('hidden');
//   return true;
// }

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();