function openModal() {
  document.getElementById("modal").classList.add("is-active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("is-active");
}

window.addEventListener("click", e => {
  if (e.target.id === "modal") closeModal();
});
