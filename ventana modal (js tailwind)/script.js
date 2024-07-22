const btnabrirmodal = document.getElementById("btn-abrir-modal");

const btncerrarmodal = document.getElementById("btn-cerrar-modal");

const modal = document.getElementById("modal");

btnabrirmodal.addEventListener("click", () => {
  modal.showModal();
});

btncerrarmodal.addEventListener("click", () => {
  modal.close();
});
