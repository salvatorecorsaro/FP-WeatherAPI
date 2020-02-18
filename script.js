var listElement = document.querySelector("#weatherResults");
var antiOCR = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "c512a33f79cf49e6a09a5bae671c6da2";
var cityName;
var url = "https://api.weatherbit.io/v2.0/current?city=" + cityName + "&key=c512a33f79cf49e6a09a5bae671c6da2";

function search() {
    cityName = document.getElementById("input_city").value;
    url = "https://api.weatherbit.io/v2.0/current?city=" + cityName + "&key=c512a33f79cf49e6a09a5bae671c6da2";
    console.log(url);
    fetch(url, showData);
}


function showData(response) {
    
      listElement.innerHTML += ` 
      <div class="col-12 center">
      <img src="https://www.weatherbit.io/static/img/icons/${response.data[0].weather.icon}.png"
          alt="weather_icon" class="img-fluid">
  </div>


  <div class="col-12 center " id="answer">
      <p>In ${response.data[0].city_name} today ${response.data[0].datetime.substring(0, 10)} at
          ${response.data[0].datetime.substring(8, 13)},
          the temperature is ${response.data[0].temp} degree and the weather status is:
          ${response.data[0].weather.description}.</p>
  </div>
      
      `;
    }
  


function fetch(url, showData) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        console.log(`${request.response.data[0].timezone}`);
        showData(request.response);
      }
    };
    request.send();
  }

