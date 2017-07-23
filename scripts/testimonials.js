import 'owl.carousel';
import $ from 'jquery';

class Testimonials {

    constructor(options = {}) {
        $('.testimonial__list').owlCarousel({
            loop: options.loop || true,
            margin: options.margin || 20,
            stagePadding: options.stagePadding || 50,
            autoplay: options.autoplay || true,
            autoplayHoverPause: options.autoplayHoverPause || true,
            responsive: options.responsive || {
                0: {
                    items: 1
                }, 750: {
                    items: 2
                }, 1200: {
                    items: 3
                }
            }
        });
    }

}

export default Testimonials;
