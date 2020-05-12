const langInfo = [
  {
    lang: 'en',
    class: 'language-item__en'
  },
  {
    lang: 'ru',
    class: 'language-item__ru'
  },
  {
    lang: 'ch',
    class: 'language-item__ch'
  },
  {
    lang: 'deu',
    class: 'language-item__deu'
  },
  {
    lang: 'esp',
    class: 'language-item__esp'
  },
  {
    lang: 'it',
    class: 'language-item__it'
  },
]

function changeLang() {
  const attr = '[data-lang]'
  const containerLang = '.js-container-lang'
  const elementsLang = document.querySelectorAll(attr)
  let currentLang;

  elementsLang.forEach(element => {
    element.addEventListener('click', handleChangeLang)
  })

  function handleChangeLang() {

  currentLang = this.dataset.lang
  
    changeMainLang()
  }

  function changeMainLang() {
    langInfo.forEach(item => {
        document.querySelector(containerLang).classList.remove(item.class)
      if(item.lang === currentLang) {
        document.querySelector(containerLang).classList.add(item.class)
      }    
    })
  }
}

export default changeLang
