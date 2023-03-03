let playerData = {};

function fetchData() {
	
	// Gets the inner text as an array of the tr tag block whose called the function (name, wins, ties, ...)
	let rawData = document.activeElement.parentElement.parentElement.innerText.split('\t');

	playerData = {
		Name: rawData[0],
		Wins: Number(rawData[1]),
		Ties: Number(rawData[2]),
		Defeats: Number(rawData[3]),
		Points: Number(rawData[4])
	};
}

// eslint-disable-next-line no-unused-vars
function addWin() {

	// After the event trigger, obtains the player's current data and updates it accordinggly to the button clicked 
	fetchData();
	playerData.Wins++;
	playerData.Points += 3;
	updateStats();
}

// eslint-disable-next-line no-unused-vars
function addTie() {

	fetchData();
	playerData.Ties++;
	playerData.Points++;
	updateStats();
}

// eslint-disable-next-line no-unused-vars
function addDefeat() {

	fetchData();
	playerData.Defeats++;
	updateStats();
}

function updateStats() {

	document.activeElement.parentElement.parentElement.innerHTML = `
		<td>${playerData.Name}</td>
		<td>${playerData.Wins}</td>
		<td>${playerData.Ties}</td>
		<td>${playerData.Defeats}</td>
		<td>${playerData.Points}</td>
		<td><button class="win" onclick="addWin()">Win</button></td>
		<td><button class="tie" onclick="addTie()">Tie</button></td>
		<td><button class="loss" onclick="addDefeat()">Defeat</button></td>
	`;
}
