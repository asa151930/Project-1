$(document).ready(function () {
  $(".sidenav").sidenav();
  $('.tap-target').tapTarget();


  let storedTitles = "";
  function displayBookmarks() {

    storedTitles = JSON.parse(localStorage.getItem("showTitle"));


    for (let i = 0; i < storedTitles.length; i++) {
      let titleLi = $("<li class='collection-item'>");
      titleLi.text(storedTitles[i]);
      $("#stored-titles").append(titleLi);
    }
    if (storedTitles !== "") {
      $("#stored-titles").attr("class", "collection")
    }
  }


  function chuckNorris() {
    fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
      "method": "GET",
      "headers": {
        "accept": "application/json",
        "x-rapidapi-key": "07375822b7mshfbcf7e4725a7defp1bf4cbjsnd4cef9f733f3",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        $("#chuck-norris").text(response.value);

      })
      .catch((err) => {
        console.error(err);
      });
  }

  chuckNorris();

  displayBookmarks();
});