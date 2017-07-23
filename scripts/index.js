import $ from 'jquery';
import Pikaday from 'pikaday'

import scrollTo from './scroll-to';
import Testimonials from './testimonials';
import duplicate from './duplicate';

$(() => {
	new Testimonials();

	new Pikaday({
		field: $('#datepicker')[0],
		format: 'DD/MM/YYYY',
		minDate: new Date()
	});

	$('[data-scrollto]').click(scrollTo);

	$('.accordion--toggle').click(function (e) {
		e.preventDefault();
		const $accordion = $(this).parents('.accordion');

		$accordion.toggleClass('accordion--open');

		if ($accordion.hasClass('accordion--open')) {
			$accordion.find('.accordion__content').attr('style', '');
		} else {
			$accordion.find('.accordion__content').css('max-height', '0px');
		}
	});

	if ($('.duplicate').length > 0) {
		duplicate({
			container: '.duplicate',
			add: '.add-another',
			remove: '.remove',
			removeButton: '.remove-button'
		}, () => {
			$('.accordion__content').css('max-height', $('.accordion__content').outerHeight() + 500);
		});
	}
});
