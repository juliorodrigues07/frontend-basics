const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


function removeAllChildNodes(parent) 
{
	while (parent.firstChild)
		parent.removeChild(parent.firstChild);
}


async function requestAPI(searchTerm)
{
	const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
	const response = await fetch(url);
	const data = await response.json();

	displayResults(data);
}

function displayResults(data)
{
	// Hides the playlist grid
	resultPlaylist.classList.add('hidden');

	// Removes possible results from previous seaches 
	let newCard = document.getElementById('artists-grid');
	removeAllChildNodes(newCard);

	data.forEach(element => {

		// Creates the card's img component
		let artistImg = document.createElement('img');
		artistImg.id = 'artist-img';
		artistImg.classList.add('artist-img');
		artistImg.src = element.urlImg;
	
		// Creates the play button and its icon (hover) 
		let buttonIcon = document.createElement('span');
		buttonIcon.className = 'fa fa-solid fa-play';
		let playButton = document.createElement('div');
		playButton.classList.add('play');
		playButton.appendChild(buttonIcon);
	
		let newImg = document.createElement('div');
		newImg.classList.add('card-img');
		newImg.appendChild(artistImg);
		newImg.appendChild(playButton);
	
		// Creates the card text content (external link, name and category)
		let linkableArtist = document.createElement('a');
		linkableArtist.title = '';
		linkableArtist.classList.add('vst');
		linkableArtist.href = '';
	
		let artistName = document.createElement('span');
		artistName.classList.add('artist-name');
		artistName.id = 'artist-name';
		artistName.innerText = element.name;
	
		let category = document.createElement('span');
		category.classList.add('category');
		category.innerText = 'Artista';
	
		let newText = document.createElement('div');
		newText.classList.add('card-text');
		newText.appendChild(linkableArtist);
		newText.appendChild(artistName);
		newText.appendChild(category);
	
		// Creates the whole card to be appended on the grid
		let artistCard = document.createElement('div');
		artistCard.classList.add('artist-card');
		artistCard.id = 'artist-card';
		artistCard.appendChild(newImg);
		artistCard.appendChild(newText);
		
		// Appends the search result card to the grid on the DOM
		newCard.appendChild(artistCard);
	});

	// Turn the search result grid visible
	resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => 
{
	const searchExpression = String(searchInput.value).toLowerCase();

	if (searchExpression == '')
	{
		resultPlaylist.classList.remove('hidden');
		resultArtist.classList.add('hidden');
	} 
	else	
		requestAPI(searchExpression);
});