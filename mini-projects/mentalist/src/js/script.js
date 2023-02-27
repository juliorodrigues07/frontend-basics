const waitStart = document.querySelector('.start-game');
const form = document.getElementById('interval-form');

waitStart.querySelector('button').addEventListener('click', function() {
	
	let formControl = form.parentElement;

	waitStart.className = 'start-game success';
	formControl.className = 'container success';
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let formControl = form.parentElement;
	formControl.className = 'container remove';
});
