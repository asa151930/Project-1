
let omdbAPI = `http://www.omdbapi.com/?y=2001&apikey=43ca4637&`;

function movieListFetch(){
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
})
.then(res => {return res.json()})
.then(response => {
    console.log(response);
    console.log(response.movie_results[0].title);
    console.log(response.movie_results[1].title);
    console.log(response.movie_results[2].title);
})
.catch(err => {
	console.error(err);
});
}

movieListFetch();



// Get the modal
var modal = document.getElementById("reveal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/* NOT SET UP YET - When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
*/

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

