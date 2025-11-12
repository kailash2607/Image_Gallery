function openModal(element) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var caption = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = element.src;
  caption.innerHTML = element.alt;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
