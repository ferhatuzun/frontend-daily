let btnSearch = document.querySelector(".btnSearch");
let movieName = document.querySelector(".movieName");
let movieImage = document.querySelector(".movieImage");
let movieDetails = document.querySelector("#movieDetails");
let movieError = document.querySelector(".error");
let movieTitle = document.querySelector(".movieTitle");
let movieImdb = document.querySelector(".movieImdb");
let movieRated = document.querySelector(".rated");
let movieYear = document.querySelector(".year");
let movieRuntime = document.querySelector(".runtime");
let movieCategory = document.querySelector(".movieCategory");
let plotText = document.querySelector(".plotText");
let castText = document.querySelector(".castText");



let APIKey = "e3b76aa1";

btnSearch.addEventListener("click", async () => {


    try {
        let response = await fetch("https://www.omdbapi.com/?t=" + movieName.value + "&apikey=" + APIKey);

        let data = await response.json();
        if (data.Response == "False") {
            throw new Error("Film bulunamadı.")
        }
        displayMovie(data)
    } catch (err) {
        onErrorMovie()
    }

})



function onErrorMovie() {
    movieDetails.style.display = "none"
    movieError.style.display = "block"
}
function displayMovie(data) {
    movieDetails.style.display = "block";
    movieError.style.display = "none";
    movieCategory.innerHTML = "";

    movieImage.src = data.Poster;
    movieTitle.textContent = data.Title;
    movieImdb.textContent = data.imdbRating;
    movieRated.textContent = data.Rated;
    movieYear.textContent = data.Year;
    movieRuntime.textContent = data.Runtime;
    plotText.textContent = data.Plot;
    castText.textContent = data.Actors;

    for (let genre of data.Genre.split(",")) {
        let category = `
            <div class="category">${genre}</div>
        `
        movieCategory.insertAdjacentHTML("beforeend", category)
    }


}