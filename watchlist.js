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
displayBookmarks();
