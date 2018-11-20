const parser = new DOMParser();

const linksSection = document.querySelector('.links');
const errorMessage = document.querySelector('.error-message');
const newLinkForm = document.querySelector('.new-link-form');
const newLinkUrl = document.querySelector('.new-link-url');
const newLinkSubmit = document.querySelector('.new-link-submit');
const clearStorageButton = document.querySelector('.clear-storage');



newLinkUrl.addEventListener('keyup', () => {
	newLinkSubmit.disabled = !newLinkSubmit.validity.valid;
});

newLinkForm.addEventListener('submit', () => {
	event.preventDefault();

	const url = newLinkUrl.value;
	fetch(url)
		.then(response => response.text())
		.then(parseResponse)
		.then(findTitle)
		.then(alert);
});

const parseResponse = (text) => {
	return parser.parseFromString(text, 'text/html');
};

const findTitle = (nodes) => {
	return nodes.querySelector('title').innerText;
};

const clearForm = () => {
	newLinkUrl.value = null;
};