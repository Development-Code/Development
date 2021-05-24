function showAlertNotif(id) {
  let alert = document.getElementById(id);

  alert.classList.add('show');
  alert.classList.add('showAlert');
  alert.classList.remove('hide');

  setTimeout(() => {
    alert.classList.remove('show');
    alert.classList.remove('showAlert');
    alert.classList.add('hide');
  }, 10000)

  let closeBTN = alert.getElementsByClassName('close-btn');

  closeBTN[0].addEventListener("click", () => {
    alert.classList.remove('show');
    alert.classList.remove('showAlert');
    alert.classList.add('hide');
  });

}