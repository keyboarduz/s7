function MySlider(){
  let active = 0;
  const images = document.querySelectorAll('.slider__slide');
  const dots = document.querySelectorAll('.slider__dot');
  const btns = document.querySelectorAll('[data-attribute]');
  
  btns.forEach((elem) => elem.addEventListener("click", btnClick));
  dots.forEach((elem) => elem.addEventListener("click", dotsClick));

  /** set interval per 5 second */
  setInterval(() => {
    btnClick(true);
  }, 5000);

  
  function btnClick(isInterval){
    if(isInterval || this.dataset.attribute === 'next'){
      dots.forEach((element) => {element.classList.remove('slider__dot_active')});
      images.forEach((element) => {element.classList.remove('slider__slide_active')});
      if(active + 1 === images.length){
        active = 0;
      }else{
        active++;
        if(active === 6){
          active = 0;
        }
      }
      images[active].classList.add('slider__slide_active')
      dots[active].classList.add('slider__dot_active') 
    }

    else if(this.dataset.attribute === 'prev'){
      dots.forEach((element) => {element.classList.remove('slider__dot_active')});
      images.forEach((element) => {element.classList.remove('slider__slide_active')});
      if(active - 1 === -1){
        active = images.length-1;
      }else{
        active--;
      }
      images[active].classList.add('slider__slide_active')
      dots[active].classList.add('slider__dot_active') 
    }
  }

  function dotsClick(e){
    active = this.dataset.dot;
    if(e.target.closest('div')){
      dots.forEach((element) => {element.classList.remove('slider__dot_active')});
      images.forEach((element) => {element.classList.remove('slider__slide_active')});
      this.classList.add('slider__dot_active');
      images[active].classList.add('slider__slide_active');
    }
  }
}




export default MySlider;

  
   
   

    