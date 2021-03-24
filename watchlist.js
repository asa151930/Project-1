// opens ham
$(".sidenav").sidenav();
$('.tap-target').tapTarget();
let storedTitles = "";
function displayBookmarks() {
  storedTitles = JSON.parse(localStorage.getItem("showTitle"));
  console.log(storedTitles);
  for (let i = 0; i < storedTitles.length; i++) {
    let titleLi = $("<li class='collection-item'>");
    titleLi.text(storedTitles[i]);
    $("#stored-titles").append(titleLi);
  }
}

//  start of jokes 
function jokeDisplay() {
  fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
		"x-rapidapi-key": "6a01cf3786msh2af5cfbb648b0a2p1d8a11jsn0ac302057485",
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);

    // populating Id jokes with inside conslog 
    $("#chuckNorris").text(data.value);
})
.catch(error => {
    console.log(error);
})
}

displayBookmarks();

// calling display jokes
jokeDisplay();
