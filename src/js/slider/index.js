import MySlider from './_slider';
import Glide from '@glidejs/glide';

function slider(){
  // MySlider()

  /**
   * @see https://glidejs.com/docs
   */
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000, // <--- setInterval per millisecond
    classes: {
      activeNav: 'slider__dot_active',
    }
  }).mount();
}

export default slider