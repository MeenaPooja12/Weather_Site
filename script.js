let result= document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
//function to fetch weather details
let getWeather = () => {
    let cityValue = cityRef.value; 
    // if input field empty
    if(cityValue.length == 0) {
        result.innerHTML=`<h3 class="msg">Please enter a city name</h3>`;
    }
    else {
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
      
      //clear the input field
      cityRef.value="";
      fetch(url)
       .then((resp) => resp.json())
      // if city name is valid
       .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        console.log(data.main.feels_like);
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        console.log(data.sys.sunrise);
        result.innerHTML =`
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
          <div>
           <h4 class="title">Min</h4>
           <h4 class="temp">${data.main.temp_min}</h4>
          </div>
          <div>
          <h4 class="title">Max</h4>
          <h4 class="temp">${data.main.temp_max}</h4>
          </div>
          
        </div>
        <div class="other-container">
          <div>
            <h5 class="title-1">Feels Like</h5>
            <h5 class="other">${data.main.feels_like}°</h5>
          </div>
          <div : first-child>
            <h5 class="title-1">Pressure</h5>
            <h5 class="other">${data.main.pressure}hPa</h5>
          </div>
          <div :second-child>
            <h5 class="title-1">Humidity</h5>
            <h5 class="other">${data.main.humidity}%</h5>
          </div>
          <div : third-child>
            <h5 class="title-1">Wind</h5>
            <h5 class="other">${data.wind.speed}mi/h</h5>
          </div>        
        </div>
         `;
      })
      // if city name is not valid
      .catch(()=>{
        result.innerHTML =`<h3 class="msg">City not found</h3>`;
      });
    }
};
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);