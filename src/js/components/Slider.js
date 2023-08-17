import { BaseComponent } from 'seltzer-components'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'

class Slider extends BaseComponent {
    initSlider() {
        this.swiper = new Swiper(this.elem, {
            effect: 'fade',
            fadeEffect: { crossFade: true },
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            loop: true,

            modules: [Pagination, EffectFade],
        })
        this.initKeys()
    }

    initKeys() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.swiper.slidePrev()
            } else if (event.key === 'ArrowRight') {
                this.swiper.slideNext()
            }
        })
    }

    init() {
        this.initSlider()
    }
}

export default Slider
