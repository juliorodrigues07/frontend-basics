const form = document.getElementById('name-form');
const player = document.getElementById('name');
let table = document.getElementById('player-table') ;

form.addEventListener('submit', (e) => {

	e.preventDefault();
	checkInput();
});

function checkInput() {

	const name = player.value;

	if (name === '')
		setErrorFor(player, 'Inform a name.');
	else
		setSuccessFor(player);

	const formControls = document.querySelectorAll('.form-control');

	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});

	if (formIsValid) {
		document.getElementById('name-form').reset();
		addPlayerRow(name);
	}
}

function addPlayerRow(playerName) {

	let playerData = {
		Name: playerName,
		Wins: 0,
		Ties: 0,
		Defeats: 0,
		Points: 0
	};

	table.innerHTML += `
		<tr>
			<td>${playerData.Name}</td>
			<td>${playerData.Wins}</td>
			<td>${playerData.Ties}</td>
			<td>${playerData.Defeats}</td>
			<td>${playerData.Points}</td>
			<td><button class="win" onClick="addWin()">Win</button></td>
			<td><button class="tie" onClick="addTie()">Tie</button></td>
			<td><button class="loss" onClick="addDefeat()">Defeat</button></td>
			<td><button class="clear" onclick="clearData()">
				Reset <i class="fa-solid fa-rotate-right"></i>
			</button></td>
			<td><button class="remove" onclick="removePlayer()">
				Remove <i class="fa-solid fa-trash"></i>
			</button></td>
		</tr>
	`;
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
