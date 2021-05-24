const modalTriggersButtons_2e22e2q2 = document.querySelector("[data-modal-target-2e22e2q2]");
const modals_2e22e2q2 = document.querySelector(".modal");
const modalCloseButtons_2e22e2q2 = document.querySelector(".modal-close");

modalTriggersButtons_2e22e2q2.addEventListener("click", event => toggleModal_2e22e2q2(event.currentTarget.getAttribute("data-modal-target-2e22e2q2")));

modalCloseButtons_2e22e2q2.addEventListener("click", event => toggleModal_2e22e2q2(event.currentTarget.closest(".modal").id));

modals_2e22e2q2.addEventListener("click", event => {
  if (event.currentTarget === event.target) toggleModal_2e22e2q2(event.currentTarget.id);
});

function toggleModal_2e22e2q2(modalId) {
  const modal = document.getElementById(modalId);

  if (getComputedStyle(modal).display === "flex") {
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial";
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";
    }, 150);
  }
  else {
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}