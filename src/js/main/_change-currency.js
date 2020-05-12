function changeCurrency() {

  const elements = document.querySelectorAll("[data-attr]");
  elements.forEach((elem) => elem.addEventListener("click", handleClick));


  function handleClick() {
    if (this.dataset.attr === 'li-collaps') {
      const activeCollapse = this.lastChild;


      if (activeCollapse) {
        const changeCollapse = document.querySelector('.active__collaps')
        changeCollapse.innerText = activeCollapse.innerText;//меняю один текст у элемента с классом 'active__collaps'
        //на другой текст элемента у которого dataset.attr === 'li-collaps'
      }
    }
  }

}

export default changeCurrency
