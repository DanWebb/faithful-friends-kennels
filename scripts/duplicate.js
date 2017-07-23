import $ from 'jquery';

export default (options, callback) => {
	const $duplicate = $(options.container);
	let index = 1;

	const toggleRemoveDisplay = () => {
		if (index > 0) {
			return $(options.removeButton).show();
		}

		return $(options.removeButton).hide();
	};

	const html = () => `
		<div class="duplicate-section-${index}">
			<hr />
			${$duplicate[0].innerHTML.replace(new RegExp(index - 1, 'g'), index)}
		</div>
	`;

	const add = () => {
		index += 1;
		$duplicate.after(html());
		toggleRemoveDisplay();
	};

	$(options.add).click(e => {
		e.preventDefault();
		add();
		return callback('add');
	});

	$(options.remove).click(e => {
		e.preventDefault();
		$(`.duplicate-section-${index}`).remove();
		index -= 1;
		toggleRemoveDisplay();
		return callback('remove');
	});

	toggleRemoveDisplay();
};
