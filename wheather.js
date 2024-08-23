const apikey="05e1d11af29a8c1d0ac2dac871d068da";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(" .search input")
        const searchBtn = document.querySelector(" .search button")
        const weatherIcon=document.querySelector(" .weatherIcon")
        async function checkWeather(city){
            const response=await fetch(apiurl + city +`&appid=${apikey}`);
            var data=await response.json()
            console.log(data)
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
            document.querySelector(".speed").innerHTML=data.wind.speed + " m/s";

            if (data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }else if(data.weather[0].main === "Rain"){
                weatherIcon.src="images/rain.png"
            }else if(data.weather[0].main === "Clear"){
                weatherIcon.src="images/clear.png";
            }else if(data.weather[0].main === "Mist"){
                weatherIcon.src="images/mist.png";
            }else if(data.weather[0].main === "Snow"){
                weatherIcon.src="images/snow.png";
            }else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
        }
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})