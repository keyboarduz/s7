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
  document.addEventListener('click', closeAllCards);
  
  // event delegation 
  function handleClick(event) { 
    let card = event.target.closest(searchAttributName); 
    
    if (!card) return; 
    if (!cardContainer.contains(card)) { 
      return; 
    } 

    let currentCardClass;
    if (card.classList.contains('icon__card_wrap-1')) {
      currentCardClass = 'icon__card_wrap-1';
    } else if (card.classList.contains('icon__card_wrap-2')) {
      currentCardClass = 'icon__card_wrap-2';
    } else if (card.classList.contains('icon__card_wrap-3')) {
      currentCardClass = 'icon__card_wrap-3';
    } else if (card.classList.contains('icon__card_wrap-4')) {
      currentCardClass = 'icon__card_wrap-4';
    }
    
    // hide another cards 
    containerElements.forEach(function(val) { 
      if (!val.classList.contains(currentCardClass)) {
        val.classList.remove(activeClass);
      }
    });

    // clicked search wrapper
    if (currentCardClass === 'icon__card_wrap-1') {
      if (event.target.closest('[data-attr="search__content_open"]')) {
        card.classList.add(activeClass);
      }

      if (event.target.closest('[data-attr="search__content_close"]')) {
        card.classList.remove(activeClass);
      }
    }
    // clicked lang wrapper 
    else if (currentCardClass === 'icon__card_wrap-2') {
      if (event.target.classList.contains('language-toggle__icon') && event.target.classList.contains('js-container-lang')) {
        card.classList.toggle(activeClass);
      }

      if (event.target.closest('.close__data-lang') || event.target.classList.contains('js-hidden-lang') || event.target.classList.contains('js-hidden-lang')) {
        card.classList.remove(activeClass);
      }
    }
    // clicked currency wrapper
    else if (currentCardClass === 'icon__card_wrap-3') {
      if (event.target.classList.contains('active__collaps')) {
        card.classList.toggle(activeClass);
      }

      if (event.target.closest('[data-attr="li-collaps"]') || event.target.classList.contains('js-hidden-lang') || event.target.dataset.attr === 'li-collaps') {
        card.classList.remove(activeClass);
      }
    }
    // clicked form
    else if (currentCardClass === 'icon__card_wrap-4') {
      if (event.target.classList.contains('active__form')) {
        card.classList.toggle(activeClass);
      }

      if (event.target.classList.contains('login-form__close') || (event.target.classList.contains('login-form__inter') && event.target.classList.contains('js-hidden'))) {
        card.classList.remove(activeClass);
      }
    }
  } 

  // close all cards
  function closeAllCards(event) {
    if (event.target.closest(searchAttributName)) {
      return;
    }
    containerElements.forEach((card) => {
      card.classList.remove(activeClass);
    });
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
