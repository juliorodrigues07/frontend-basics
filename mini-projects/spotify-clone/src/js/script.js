const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


async function requestAPI(searchTerm)
{
	const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
	const response = await fetch(url);
	const data = await response.json();

	displayResults(data);
}

function displayResults(data)
{
	resultPlaylist.classList.add('hidden');

	const artistName = document.getElementById('artist-name');
	const artistImage = document.getElementById('artist-img');

	data.forEach(element => {
		artistName.innerText = element.name;
		artistImage.src = element.urlImg;
	});

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