import $ from 'jquery';

export default function(e) {
	e.preventDefault();

	const $elem = $($(this).data('scrollto'));

	$('html, body').animate({
		scrollTop: $elem.offset().top
	}, 600);

  return this;
}
