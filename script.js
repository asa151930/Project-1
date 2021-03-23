$(document).ready(function () {
  $(".collapsible").collapsible();
  $(".modal").modal();
  $(".sidenav").sidenav();
});

let currentYear = moment().format("YYYY");
let apiKey = "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3";
let yearSearch = "";
// const searchVal = $("#search-val");
let moviesUl = $("#movie-results");
let expandedTitle = "";
let serviceSelector = document.getElementById("streaming-service");
let streamingService = "";
let formattedServiceName = "";

let mediaTypeSelector = document.getElementById("media-type");
let mediaType = "";
let apiMediaTypeString = "";
let displayMediaTypeString = "";

let descriptionTextColor = document.querySelector(".description");
let showTitleArr = JSON.parse(localStorage.getItem("showTitle")) || [];

$("#submit").click(function (event) {
  event.preventDefault();
  moviesUl.html("");
  // yearSearch = searchVal.val();
  streamingService = serviceSelector.options[
    serviceSelector.selectedIndex
  ].text.toLowerCase();
  mediaType = mediaTypeSelector.options[
    mediaTypeSelector.selectedIndex
  ].text.toLowerCase();

  formatServiceName();
  formatApiMediaString();
  console.log(mediaType);

  if (
    streamingService === "streaming service" ||
    mediaType === "movies or series?"
  ) {
    return;
  }

  $(".description").css("color", "white");
  $("#headline").css("color", "white");
  $("#subheadline").css("color", "white");

  $("body").attr("class", "animated-bg");
  $("#headline").text(
    `Top 10 ${formattedServiceName} ${displayMediaTypeString}`
  );
  $("#headline").attr("class", "show");
  $("#subheadline").attr("class", "show");

  console.log(mediaType);

  movieResultsFetch();
});

function formatServiceName() {
  if (streamingService === "hbo") {
    formattedServiceName = streamingService.toUpperCase();
  } else if (streamingService === "prime") {
    formattedServiceName = "Amazon Prime";
  } else if (streamingService === "disney") {
    formattedServiceName = "Disney+";
  } else {
    formattedServiceName =
      streamingService.charAt(0).toUpperCase() + streamingService.slice(1);
  }
}

function formatApiMediaString() {
  if (mediaType === "movies") {
    apiMediaTypeString = "movie";
    displayMediaTypeString = "Movies";
  } else {
    apiMediaTypeString = "series";
    displayMediaTypeString = "Series";
  }
}

function movieResultsFetch() {
  fetch(
    `https://streaming-availability.p.rapidapi.com/search/ultra?country=us&service=${streamingService}&type=${apiMediaTypeString}&order_by=imdb_rating&page=1&desc=true&language=en&min_imdb_vote_count=10000&max_imdb_vote_count=1000000`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
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

      for (let i = 0; i < 11; i++) {
        let idEnding = i;
        $(`#movie-poster-${idEnding}`).attr(
          "src",
          `${response.results[i].backdropURLs["780"]}`
        );
        $(`#title${idEnding}`).text(`${response.results[i].title}`);
        $(`#modal-title-${idEnding}`).text(`${response.results[i].title}`);
        $(`#modal-tagline-${idEnding}`).text(`${response.results[i].tagline}`);
        $(`#modal-year-${idEnding}`).text(
          "Released: " + `${response.results[i].year}`
        );
        $(`#modal-overview-${idEnding}`).text(
          `${response.results[i].overview}`
        );
        $(`#modal-cast-${idEnding}`).text(
          "Cast: " + `${response.results[i].cast.join(", ")}`
        );
        $(`#modal-genres-${idEnding}`).text(
          "Genre: " + `${response.results[i].genres}`
        );
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
// Watchlist Page
$("i").on("click", function (event) {
  event.preventDefault();
  let parent1 = $(this).parent();
  let parent2 = parent1.parent();
  let sibling1 = parent2.siblings(".card-content");
  let showTitle = sibling1.children().text();
  showTitleArr.push(showTitle);
  console.log(showTitle);
  console.log(showTitleArr);
  localStorage.setItem("showTitle", JSON.stringify(showTitleArr));
});
