function toggle() {
  const searchAttributName = "[data-toggle]"; // пармаетр для поиска(класс, айди, дата атрибут)
  //console.log(searchAttributName) здесь выдаст нам просто - [data-toggle]
  const containerElements = document.querySelectorAll(searchAttributName); // console.log(containerElements) выдаст нам
  //NodeList(3) [div.icon__card_wrap-2, div.icon__card_wrap-3, div.icon__card_wrap-4] массив элементов который содержит
  //дата-атрибут - [data-toggle]
  const activeClass = "_active-toggle";
  // const div = document.querySelector(searchAttributName);   //дебажу:)
  // console.log(div.closest("[data-toggle]"));
  const jsHidden = document.querySelectorAll('.js-hidden-lang, .js-hidden');
  const allLang =  document.querySelectorAll('.close__data-lang')
   
  /** new realization */
  const cardContainer = document.querySelector('.icons__card');

  cardContainer.addEventListener('click', handleClick);

  // event delegation
  function handleClick(event) {
    let card = event.target.closest(searchAttributName);

    if (!card) return;

    if (!cardContainer.contains(card)) {
      return;
    }

    console.log('new click');

    // hide all cards
    containerElements.forEach(function(val) {
      val.classList.remove(activeClass);
    })

    console.log(card);
    // show card
    
    if (card.classList.contains('icon__card_wrap-2')) {
      card.classList.toggle(activeClass);
    }
    
  }
  /** end new realization */ 
  
  // containerElements.forEach((element) => {
  //   element.addEventListener("click", handleClickToggle); //по клику на наш массив элементов в которых есть [data-toggle]
  //   //а именно на NodeList(3) [div.icon__card_wrap-2, div.icon__card_wrap-3, div.icon__card_wrap-4] открывается
  //   //функция handleClickToggle() в которой мы ищем activeClass = "_active-toggle" и если находим то удаляем его, но
  //   //если не находим, то добавляем в наш массив
  //   //NodeList(3) [div.icon__card_wrap-2, div.icon__card_wrap-3, div.icon__card_wrap-4] класс "_active-toggle"
  // });
  
  
  //   document.addEventListener("click", handleCLickHide); //функция если клик прошел по другому элементу удаляет класс
  // //activeClass

  // function handleClickToggle(e) {
  //   containerElements.forEach((element) => {
  //     element.classList.remove(activeClass);
  //     //преребераем массив NodeList(3) [div.icon__card_wrap-2, div.icon__card_wrap-3, div.icon__card_wrap-4]
  //     //удаляем из него класс - activeClass если он есть
  //   });
    
  //   if(e.target.closest('div')) {
  //     this.classList.add(activeClass); //если нет activeClass, добавляем его
  //   }

  //   //debug
  //   console.log('.close__data-lang: ' + e.target.closest('.close__data-lang'));

  //   if(e.target.closest('.close__data-lang') 
  //     || e.target.closest('.li__collaps') 
  //     || e.target.closest('.search__content_close') 
  //     || e.target.closest('.login-form__close')){
  //     containerElements.forEach((element) => {
  //       element.classList.remove(activeClass)});
  //   }
  // }
  // //можете свой функционал написать если надо а мой просто закомментировать
  

  // function handleCLickHide(event) {
  //   console.log('handleClickHide');
  //   //event.target.closest(searchAttributName) - поиск при клике на элементе конкретного атрибута, класса, АЙДИ и.т.д
  //   if (!event.target.closest(searchAttributName)) {//Тут же просто идёт проверка, если клик по элементу 
  //     //где присутствует атрибут , то ничего не делаем , иначе удаляем. Только в нашем случае наоборот!!!
  //     // console.log(!event.target.closest(searchAttributName))//если элемент присутствует, то ничего не выводит в консоли
  //     //а если отсутствует, то выводит null. Т. е. если класс activeClass активен, то мы ничего не делаем, но поскольку
  //     // у нас перед event.target стоит !event.target, то мы мы делаем удаление activeClass
      
  //     containerElements.forEach((element) => {
  //       console.log('reemove');
  //       element.classList.remove(activeClass);
  //     });
  //   }
  // }
  
}

export default toggle;
