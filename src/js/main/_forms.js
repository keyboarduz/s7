function forms() {
  const loginLabel = document.querySelectorAll(".input");
  loginLabel.forEach((element) => element.addEventListener("click", handleLabel));

  function handleLabel() {
    document.querySelectorAll('.input-placeholder').forEach((element) => element.classList.remove("changePlaceholder"));
    this.nextSibling.classList.add('changePlaceholder');
  }
  document.addEventListener("click", handlerHide);

  function handlerHide(e) {
    if (!e.target.nextSibling) {
      document.querySelectorAll('.input-placeholder').forEach((element) => element.classList.remove("changePlaceholder"));
    }
  }
}
export default forms;



