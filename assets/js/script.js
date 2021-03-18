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


