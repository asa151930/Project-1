// Accordion script
$(document).ready(function(){
  $('.collapsible').collapsible();
});

let currentYear = moment().format("YYYY");

let omdbAPI = `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=`;
let yearSearch = '';
const searchVal = $("#search-val");
let moviesUl = $("#movie-results");

$("#submit").click(function(event){
  event.preventDefault();
  moviesUl.html("");
  yearSearch = searchVal.val();

  console.log(yearSearch);

  if (yearSearch === '' || yearSearch > currentYear || yearSearch.length < 4){
    return;
  }
  
  $("#headline").text(`Top 10 Movies of ${yearSearch}`);

  movieListFetch();

})


function movieListFetch() {
  fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=${yearSearch}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
    }
  })
    .then(res => { return res.json() })
    .then(response => {
      console.log(response);
      $("#resulting-movies").attr("class", "show");
      $("#helpful").attr("class", "show");
      $("#title1").text(`${response.movie_results[0].title}`);
      $("#title2").text(`${response.movie_results[1].title}`);
      $("#title3").text(`${response.movie_results[2].title}`);
      $("#title4").text(`${response.movie_results[3].title}`);
      $("#title5").text(`${response.movie_results[4].title}`);
      $("#title6").text(`${response.movie_results[5].title}`);
      $("#title7").text(`${response.movie_results[6].title}`);
      $("#title8").text(`${response.movie_results[7].title}`);
      $("#title9").text(`${response.movie_results[8].title}`);
      $("#title10").text(`${response.movie_results[9].title}`);
    })
    .catch(err => {
      console.error(err);
    });
}

function moveDetailsFetch() {
  fetch("https://ott-details.p.rapidapi.com/search?title=men in black&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
		"x-rapidapi-host": "ott-details.p.rapidapi.com"
	}
})
.then(res => {return res.json()})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}


// moveDetailsFetch();

