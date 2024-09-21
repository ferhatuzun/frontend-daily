let country = document.querySelector("#country");
let searchBtn = document.querySelector(".searchBtn");
let onError = document.querySelector("#onError");
let result = document.querySelector("#result");
let img404 = document.querySelector(".img404");
let resultContainer = document.querySelector("#resultContainer");
let resultImg = document.querySelector(".resultImg");
let centigradeText = document.querySelector(".centigradeText");
let weatherInfo = document.querySelector(".weatherInfo");
let humidityText = document.querySelector(".humidityText");
let windText = document.querySelector(".windText");

const APIKey = "56f24c48bb30840657738a36583e0f40"


searchBtn.addEventListener("click", async () => {

    if(country.value=="") return;

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&units=metric&appid=${APIKey}`)


        if (!response.ok) {
            return onErrorFn()
        }
        let data = await response.json();

        resultImg.src = `images/${data.weather[0].main}.png`
        centigradeText.innerHTML = `${Math.floor(data.main.temp)} <span>°C<span>`
        weatherInfo.textContent = data.weather[0].description
        humidityText.textContent = data.main.humidity + "%"
        windText.textContent = Math.floor(data.wind.speed) + "Km/h"



        displayElement();
        console.log(data)

    } catch (err) {
        err();
    }

})



let onErrorFn = () => {
    resultContainer.classList.remove("fade-in");
    resultContainer.style.display = "none"

    result.style.height = "30rem";
    onError.classList.add("fade-in")
    onError.style.display = "block"


}
let displayElement = () => {
    result.style.height = "45rem"
    resultContainer.classList.add("fade-in");
    let extra = document.querySelector(".extra");
    extra.classList.add("fade-in")
    resultContainer.style.display = "flex"

    onError.classList.remove("fade-in")
    onError.style.display = "none"
}









// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}