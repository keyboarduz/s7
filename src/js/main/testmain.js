// import {toggleLanguage} from './_toggle-language';
// import {toggleExchange} from './_toggle-exchange';
// toggleExchange()
// toggleLanguage()

const container = document.querySelectorAll(".js-toggle");
const activeClass = document.querySelector(".active");

container.forEach((elem) => elem.addEventListener("click", toggleClick));
document.addEventListener("click", toggleClose);

function toggleClick() {
  if (container) {
    container.forEach((elem) => elem.classList.remove("active"));
    this.classList.add("active");
  }
}

function toggleClose(e) {
  const containerSearch = document.querySelectorAll(".js-toggle");

  if (e.target.closest(container)) {
    //Жуть как ругается на св-во closest closest(container)
    containerSearch.forEach((elem) => elem.classList.remove("active"));
    console.log(container);
  }
}

// }
// function toggleClick(){
//   if(container){
//     // container.forEach((elem) => elem.classList.remove('active'))
//   // const  removeActive = document.querySelectorAll('.active');
//   // removeActive.forEach((elem) => elem.classList.remove('active'))
//     this.classList.add('active')
//   }
// }

const elements = document.querySelectorAll("[data-attr]");
elements.forEach((elem) => elem.addEventListener("click", handleClick));

function handleClick() {
  if (this.dataset.attr === "top-menu") {
    elements.forEach((elem) => elem.classList.remove("top__menu-active"));
    this.classList.add("top__menu-active");
  }
  // if(this.dataset.attr === 'collaps'){
  //   const content = this.lastChild;
  //   content.classList.toggle('active');
  //   if(content.style.maxHeight){
  //     content.style.maxHeight = null;
  //   }else{
  //     content.style.maxHeight = content.scrollHeight + 'px';
  //   }
  // }
  if(this.dataset.attr === 'li-collaps'){
    const activeCollapse = this.lastChild;
    console.log(activeCollapse)
    if(activeCollapse){
      changeCollapse = document.querySelector('.active__collaps')
      changeCollapse.innerText = activeCollapse.innerText;//меняю один текст у элемента с классом 'active__collaps'
      //на другой текст элемента у которого dataset.attr === 'li-collaps'
    }
  }
  if (this.dataset.attr === "search__content_open") {
    document.querySelector(".search__content").style.display = "block";
  }
  if (this.dataset.attr === "search__content_close") {
    document.querySelector(".search__content").style.display = "none";
  }
  if (this.dataset.attr === "language-item") {
    const topLanguage = document.querySelector(".language-toggle__icon");

    //БЕЗРЕЗУЛЬТАТНО ДЕБАЖУ backgroundImage

    const topLanguage1 = document.querySelector(".demo");
    topLanguage1.innerHTML = topLanguage1.style.backgroundImage =
      "url(" +
      "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter x='-22.5%25' y='-37.5%25' width='145%25' height='175%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0' in='shadowBlurOuter1' result='shadowMatrixOuter1'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23a)' transform='translate(0 4)' fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23FFF' d='M0 0h20v4H0z'/%3E%3Cpath fill='%233367D6' d='M0 4h20v4H0z'/%3E%3Cpath fill='%23D22630' d='M0 8h20v4H0z'/%3E%3C/g%3E%3C/svg%3E" +
      ")";
    // topLanguage1.innerHTML = this.firstChild.style.backgroundImage;
    // topLanguage.style.backgroundImage = this.firstChild.style.backgroundImage;
    // topLanguage.innerHTML = topLanguage.style.backgroundImage;
    // console.log(this.firstChild.backgroundImage)
    // console.log(topLanguage)
    // topLanguage1.innerHTML = this.firstChild.backgroundImage;//не могу менять backgroundImage при клике(( SOS!!! HELP!!! ))
  }
  // if(this.dataset.attr === 'login'){
  //   const topLanguage = document.querySelector('.login-form__component');
  //   topLanguage.classList.toggle('active-language');
  // }
}
