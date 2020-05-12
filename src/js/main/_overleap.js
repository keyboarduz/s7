
function overleap(){
  const elements = document.querySelectorAll("[data-attr]");
  elements.forEach((elem) => elem.addEventListener("click", handleClick));

  function handleClick() {
    if (this.dataset.attr === "top-menu") {
      elements.forEach((elem) => elem.classList.remove("top__menu-active"));
      this.classList.add("top__menu-active");
    }
    // if (this.dataset.attr === "search__content_open") {
    //   document.querySelector(".search__content").style.display = "block";
    // }
    // if (this.dataset.attr === "search__content_close") {
    //   document.querySelector(".search__content").style.display = "none";
    // }

    
  }
}











export default overleap;