// Accordion script
$(document).ready(function () {
  $('.collapsible').collapsible();
  $('.modal').modal();
  $('.sidenav').sidenav();
});

let currentYear = moment().format("YYYY");

let omdbAPI = `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=`;
let yearSearch = "";
const searchVal = $("#search-val");
let moviesUl = $("#movie-results");
let expandedTitle = "";
let dropdownForm = document.getElementById("streaming-service"); // Change to user input
let streamingService = "";

$("#submit").click(function (event) {
  event.preventDefault();
  moviesUl.html("");
  yearSearch = searchVal.val();
  streamingService = dropdownForm.options[
    dropdownForm.selectedIndex
  ].text.toLowerCase();

  console.log(yearSearch);
  console.log(streamingService);

  if (streamingService === ("streaming service")) {
    return;
  }

  $("#headline").text(`Top ${streamingService} Movies`); 
  
  movieResultsFetch();
});

function movieResultsFetch() {
  fetch(
    `https://streaming-availability.p.rapidapi.com/search/ultra?country=us&service=${streamingService}&type=movie&order_by=imdb_rating&page=1&desc=true&language=en&min_imdb_vote_count=10000&max_imdb_vote_count=1000000`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
      $("#resulting-movies").attr("class", "show");
      $("#helpful").attr("class", "show");

      // TRYING TO SPLIT CAST FROM ARRAY
      var castString = response.results[0].cast.join(", ");
      console.log(castString);

      // Populate info for movie #1
      $("#movie-poster-1").attr(
        "src",
        `${response.results[0].backdropURLs["780"]}`
      );
      $("#title1").text(`${response.results[0].title}`);
      $("#modal-title-1").text(`${response.results[0].title}`);
      $("#modal-tagline-1").text(`${response.results[0].tagline}`);
      $("#modal-year-1").text("Released: " + `${response.results[0].year}`);
      $("#modal-overview-1").text(`${response.results[0].overview}`);
      $("#modal-cast-1").text(
        "Cast: " + `${response.results[0].cast.join(", ")}`
      );
      $("#modal-genres-1").text("Genre: " + `${response.results[0].genres}`);

      // Populate info for movie #2
      $("#movie-poster-2").attr(
        "src",
        `${response.results[1].backdropURLs["780"]}`
      );
      $("#title2").text(`${response.results[1].title}`);
      $("#modal-title-2").text(`${response.results[1].title}`);
      $("#modal-tagline-2").text(`${response.results[1].tagline}`);
      $("#modal-year-2").text("Released: " + `${response.results[1].year}`);
      $("#modal-overview-2").text(`${response.results[1].overview}`);
      $("#modal-cast-2").text(
        "Cast: " + `${response.results[1].cast.join(", ")}`
      );
      $("#modal-genres-2").text("Genre: " + `${response.results[1].genres}`);

      // Populate info for movie #3
      $("#movie-poster-3").attr(
        "src",
        `${response.results[2].backdropURLs["780"]}`
      );
      $("#title3").text(`${response.results[2].title}`);
      $("#modal-title-3").text(`${response.results[2].title}`);
      $("#modal-tagline-3").text(`${response.results[2].tagline}`);
      $("#modal-year-3").text("Released: " + `${response.results[2].year}`);
      $("#modal-overview-3").text(`${response.results[2].overview}`);
      $("#modal-cast-3").text(
        "Cast: " + `${response.results[2].cast.join(", ")}`
      );
      $("#modal-genres-3").text("Genre: " + `${response.results[2].genres}`);

      // Populate info for movie #4
      $("#movie-poster-4").attr(
        "src",
        `${response.results[3].backdropURLs["780"]}`
      );
      $("#title4").text(`${response.results[3].title}`);
      $("#modal-title-4").text(`${response.results[3].title}`);
      $("#modal-tagline-4").text(`${response.results[3].tagline}`);
      $("#modal-year-4").text("Released: " + `${response.results[3].year}`);
      $("#modal-overview-4").text(`${response.results[3].overview}`);
      $("#modal-cast-4").text(
        "Cast: " + `${response.results[3].cast.join(", ")}`
      );
      $("#modal-genres-4").text("Genre: " + `${response.results[3].genres}`);

      // Populate info for movie #5
      $("#movie-poster-5").attr(
        "src",
        `${response.results[4].backdropURLs["780"]}`
      );
      $("#title5").text(`${response.results[4].title}`);
      $("#modal-title-5").text(`${response.results[4].title}`);
      $("#modal-tagline-5").text(`${response.results[4].tagline}`);
      $("#modal-year-5").text("Released: " + `${response.results[4].year}`);
      $("#modal-overview-5").text(`${response.results[4].overview}`);
      $("#modal-cast-5").text(
        "Cast: " + `${response.results[4].cast.join(", ")}`
      );
      $("#modal-genres-5").text("Genre: " + `${response.results[4].genres}`);

      // Populate info for movie #6
      $("#movie-poster-6").attr(
        "src",
        `${response.results[5].backdropURLs["780"]}`
      );
      $("#title6").text(`${response.results[5].title}`);
      $("#modal-title-6").text(`${response.results[5].title}`);
      $("#modal-tagline-6").text(`${response.results[5].tagline}`);
      $("#modal-year-6").text("Released: " + `${response.results[5].year}`);
      $("#modal-overview-6").text(`${response.results[5].overview}`);
      $("#modal-cast-6").text(
        "Cast: " + `${response.results[5].cast.join(", ")}`
      );
      $("#modal-genres-6").text("Genre: " + `${response.results[5].genres}`);

      // Populate info for movie #7
      $("#movie-poster-7").attr(
        "src",
        `${response.results[6].backdropURLs["780"]}`
      );
      $("#title7").text(`${response.results[6].title}`);
      $("#modal-title-7").text(`${response.results[6].title}`);
      $("#modal-tagline-7").text(`${response.results[6].tagline}`);
      $("#modal-year-7").text("Released: " + `${response.results[6].year}`);
      $("#modal-overview-7").text(`${response.results[6].overview}`);
      $("#modal-cast-7").text(
        "Cast: " + `${response.results[6].cast.join(", ")}`
      );
      $("#modal-genres-7").text("Genre: " + `${response.results[6].genres}`);

      // Populate info for movie #8
      $("#movie-poster-8").attr(
        "src",
        `${response.results[7].backdropURLs["780"]}`
      );
      $("#title8").text(`${response.results[7].title}`);
      $("#modal-title-8").text(`${response.results[7].title}`);
      $("#modal-tagline-8").text(`${response.results[7].tagline}`);
      $("#modal-year-8").text("Released: " + `${response.results[7].year}`);
      $("#modal-overview-8").text(`${response.results[7].overview}`);
      $("#modal-cast-8").text(
        "Cast: " + `${response.results[7].cast.join(", ")}`
      );
      $("#modal-genres-8").text("Genre: " + `${response.results[7].genres}`);

      // Populate info for movie #9
      $("#movie-poster-9").attr(
        "src",
        `${response.results[8].backdropURLs["780"]}`
      );
      $("#title9").text(`${response.results[8].title}`);
      $("#modal-title-9").text(`${response.results[8].title}`);
      $("#modal-tagline-9").text(`${response.results[8].tagline}`);
      $("#modal-year-9").text("Released: " + `${response.results[8].year}`);
      $("#modal-overview-9").text(`${response.results[8].overview}`);
      $("#modal-cast-9").text(
        "Cast: " + `${response.results[8].cast.join(", ")}`
      );
      $("#modal-genres-9").text("Genre: " + `${response.results[8].genres}`);

      // Populate info for movie #10
      $("#movie-poster-10").attr(
        "src",
        `${response.results[9].backdropURLs["780"]}`
      );
      $("#title10").text(`${response.results[9].title}`);
      $("#modal-title-10").text(`${response.results[9].title}`);
      $("#modal-tagline-10").text(`${response.results[9].tagline}`);
      $("#modal-year-10").text("Released: " + `${response.results[9].year}`);
      $("#modal-overview-10").text(`${response.results[9].overview}`);
      $("#modal-cast-10").text(
        "Cast: " + `${response.results[9].cast.join(", ")}`
      );
      $("#modal-genres-10").text("Genre: " + `${response.results[9].genres}`);
    })
    .catch((err) => {
      console.error(err);
    });
}
