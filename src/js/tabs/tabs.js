function tabs(){
  const tabRoll = document.querySelectorAll('.tab-roll');
  const tabRollContent = document.querySelectorAll('.tab-roll-content');

  tabRoll.forEach((elem) => elem.addEventListener("click", tabClick));
  
  function tabClick(e){
    if(e.target.closest('li')){
      tabRoll.forEach((element) => {element.classList.remove('tab-roll__active')});
      tabRollContent.forEach((element) => {element.classList.remove('tab-roll__active-content')});
      this.classList.add('tab-roll__active');
      let activTab = this.dataset.tab;
      tabRollContent[activTab].classList.add('tab-roll__active-content');
    }
  }
}

export default tabs;
      


