const form = document.getElementById('form-wrapper');
const mediaList = document.getElementById('media-list');
let media = Array();

form.querySelector('button').addEventListener('click', (e) => {
	e.preventDefault();
});

function checkInputs() {

	let image = document.getElementById('media');
	let title = document.getElementById('media-title');
	let trailerURL = document.getElementById('trailer');

	let check = String(image.value).toLowerCase().endsWith('.jpg') || 
				String(image.value).toLowerCase().endsWith('.png');

	if (check)
		setSuccessFor(image);
	else if (image.value === '')
		setErrorFor(image, 'Inform an URL.');
	else
		setErrorFor(image, 'Inform a valid image (.jpg or .png)');

	if (title.value === '')
		setErrorFor(title, 'Inform a title.');
	else
		setSuccessFor(title);

	if (trailerURL.value === '')
		setErrorFor(trailerURL, 'Inform an URL.');
	else
		setSuccessFor(trailerURL);

	let formControls = form.querySelectorAll('.form-control');
	
	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});
	
	if (formIsValid) 
		addMedia(image.value, title.value, trailerURL.value);
}

function addMedia(image, title, trailerURL) {

	let mediaDict = {};
	mediaDict['Image'] = image;
	mediaDict['Title'] = title;
	mediaDict['Trailer'] = trailerURL;
	media.push(mediaDict);

	// Clears the form input fields
	document.getElementById('form-wrapper').reset();

	mediaList.innerHTML += `<a href=${trailerURL}>\n\t
								<img src=${image}>\n\t
								<span>${title}</span>\n
							</a>`;
}

function setErrorFor(field, message) {

	let formControl = field.parentElement;
	let small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(field) {

	let formControl = field.parentElement;
	formControl.className = 'form-control success';

	setTimeout(function() {
		formControl.className = 'form-control';
	}, 2500);
}
