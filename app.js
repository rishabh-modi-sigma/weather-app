const apiKey = "160db8e41634f379f55dad03dd5da937";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    try{
       let res = await fetch(apiUrl + city + `&appid=${apiKey}`);

       if(Response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
       }else{
        var data = await res.json();
      

        document.querySelector(".city").innerHTML= data.name; 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; 
        document.querySelector(".hum").innerHTML = data.main. humidity + "%";
        document.querySelector(".win").innerHTML = data.wind.speed + " km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="sakshidi/cloudy.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "sakshidi/rainy-day.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "sakshidi/cloudy (1).png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "sakshidi/fog.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
       }
       

    }catch(e){
        console.log("Error Catched",e);
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


