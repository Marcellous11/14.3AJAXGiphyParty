console.log("Let's get this party started!");

async function getGif(search) {
	const ref = await axios.get(
		`https://api.giphy.com/v1/gifs/search?api_key=1ByxqURI4Ciw1392LKdhmjtTe10brevP&q=${search}&limit=25&offset=0&rating=g&lang=en`
	);
	let num = Math.floor(Math.random() * 25);
	console.log(ref.data.data[num].images.original.url);
	console.log(ref.data.data);

	let url = ref.data.data[num].images.original.url;

	let img = document.createElement('img');
	const container = document.querySelector('#gifContainer');
	img.src = url;
	container.append(img);
	document.getElementById('searchInput').value = '';
}

$('#submitBtn').on('click', function(event) {
	event.preventDefault();

	if (document.getElementById('searchInput').value === '') {
		alert('YOUT MUST SEARCH FOR SOMETHING');
	}
	let search = document.getElementById('searchInput').value;
	getGif(search);
});

$('#clearBtn').on('click', function(event) {
	event.preventDefault();
	$('#gifContainer').empty();
});

// make all the images the same size
// finish the delete button
// make it fit nicely
// make it look dope
