let weather = {
    apiKey: "644f38d955320bdc36a68a1d46b90e48",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q" + city + "&units=metric&appid=" + apikey
        )
        .then((response) => response.json()) 
        .then((data) => console.log(data)) 
      }

    }





//           city +
//           "&units=metric&appid=" +
//           this.apiKey
//       )
//         .then((response) => {
//           if (!response.ok) {
//             alert("No weather found.");
//             throw new Error("No weather found.");
//           }
//           return response.json();
//         })
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function (data) {
//       const { name } = data;
//       const { icon, description } = data.weather[0];
//       const { temp, humidity } = data.main;
//       const { speed } = data.wind;
//       document.querySelector(".city").innerText = "Weather in " + name;
//       document.querySelector(".description").innerText = description;
//       document.querySelector(".temp").innerText = temp + "°C";
//       document.querySelector(".humidity").innerText =
//         "Humidity: " + humidity + "%";
//       document.querySelector(".wind").innerText =
//         "Wind speed: " + speed + " km/h";
//       document.querySelector(".weather").classList.remove("loading");
//     },
//     search: function () {
//       this.fetchWeather(document.querySelector(".search-bar").value);
//     },
//   };
  
//   document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
//   weather.fetchWeather("Denver");

.entertainment .box-container{
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
  }
  
  .entertainment .box-container .box{
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
    border:2px solid #fff;
    border-radius: .5rem;
    flex:1 1 10px;
    height: 15rem;
    position: relative;
  }
  
  .entertainment .box-container .box img{
    height: 100%;
    width:100%;
    object-fit: cover;
  }
  
  .entertainment .box-container .box .content{
    position: absolute;
    height: 100%;
    width:100%;
    background:rgba(0,0,0,.7);
    padding:2rem;
    padding-top: 5rem;
  }
  
  .entertainment .box-container .box:hover .content{
    top:0;
  }
  
  .entertainment .box-container .box .content h3{
    font-size: 20px;
    color:green;
  }
  
  .entertainment .box-container .box .content p{
    font-size: 15px;
    color:#eee;
    padding:.5rem 0;
  } 