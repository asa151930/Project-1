// Accordion script
$(document).ready(function () {
  $('.collapsible').collapsible();
  $('.modal').modal();
  $('.sidenav').sidenav();
});

let currentYear = moment().format("YYYY");

let omdbAPI = `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=`;
let yearSearch = '';
const searchVal = $("#search-val");
let moviesUl = $("#movie-results");
let expandedTitle = "";
let dropdownForm = document.getElementById("streaming-service"); // Change to user input
let streamingService = "";

$("#submit").click(function (event) {
  event.preventDefault();
  moviesUl.html("");
  yearSearch = searchVal.val();
  streamingService = (dropdownForm.options[dropdownForm.selectedIndex].text).toLowerCase();

  console.log(yearSearch);
  console.log(streamingService);

  if (streamingService === ("streaming service")) {
    return;
  }

  $("#headline").text(`Top ${streamingService} Movies`); 
  
  movieResultsFetch();

})


function movieResultsFetch() {
  fetch(`https://streaming-availability.p.rapidapi.com/search/ultra?country=us&service=${streamingService}&type=movie&order_by=imdb_rating&page=1&desc=true&language=en&min_imdb_vote_count=10000&max_imdb_vote_count=1000000`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com"
    }
  })
    .then(res => { return res.json() })
    .then(response => {
      console.log(response);
      $("#resulting-movies").attr("class", "show");
      $("#helpful").attr("class", "show");

      // Populate info for movie #1
      $("#movie-poster-1").attr("src", `${response.results[0].backdropURLs['780']}`);
      $("#title1").text(`${response.results[0].title}`);
      $("#modal-title-1").text(`${response.results[0].title}`);
      $("#modal-overview-1").text(`${response.results[0].overview}`);
      let castString = response.results[0].cast.join(", ");
      console.log(castString);

      // Populate info for movie #2

      $("#movie-poster-2").attr("src", `${response.results[1].backdropURLs['780']}`);
      $("#title2").text(`${response.results[1].title}`);
      $("#modal-title-2").text(`${response.results[1].title}`);
      $("#modal-overview-2").text(`${response.results[1].overview}`);

      // Populate info for movie #3
        $("#card3").attr("class", "show");
        $("#movie-poster-3").attr("src", `${response.results[2].backdropURLs['780']}`);
        $("#title3").text(`${response.results[2].title}`);
        $("#modal-title-3").text(`${response.results[2].title}`);
        $("#modal-overview-3").text(`${response.results[2].overview}`);
      

      // Populate info for movie #4
      $("#card4").attr("class", "show");
      $("#movie-poster-4").attr("src", `${response.results[3].backdropURLs['780']}`);
      $("#title4").text(`${response.results[3].title}`);
      $("#modal-title-4").text(`${response.results[3].title}`);
      $("#modal-overview-4").text(`${response.results[3].overview}`);

    })
    .catch(err => {
      console.error(err);
    });
}








