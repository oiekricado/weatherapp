
function getWeather(){

  let ubicacion = document.getElementById("city").value;


let urlvar = "https://api.openweathermap.org/data/2.5/weather?q="+ubicacion+"&appid=9e63abef4bedfff92e096db044129747&units=metric";

 fetch(urlvar)
   .then((data) => data.json())
   .then((pronostico) => {

     console.log(pronostico)
     let iconCode = pronostico.weather[0].icon;
     let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`

      
      
      
     console.log(iconUrl)
     let divInfoclima = document.getElementById("contenedorClima");
     divInfoclima.innerHTML = `

      <div id="temperatura" class=" w-4/5 h-4/5 md:w-2/3 md:h-2/3 lg:w-3/5 lg:h-3/5 xl:w-2/5 xl:h-3/5 2xl:w-1/4 2xl:h-4/5 grid grid-cols-3 grid-rows-7 p-5  ">
          <h1 id="ciudad" class=" col-start-1 col-span-3 text-3xl font-bold w-64 text-center">${pronostico.name},${pronostico.sys.country}</h1>
        <img src="${iconUrl} " alt="" srcset="" class=" col-start-1 row-start-2 h-24 pt-2 pl-2">
        <h2 id="descripcion" class="pt-4 pl-2  text-5xl col-start-2 col-span-2 font-medium ">${pronostico.weather[0].description}</h2>
        <h1 id="tempActual" class="col-start-1  row-start-3 col-span-2 text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold pl-2">${pronostico.main.temp}°C</h1>
        <div id="tempMin" class="grid place-content-center col-start-3 row-start-3 bg-slate-100 h-12 w-20 rounded-xl">
          <h2 class=" text-2xl font-medium">${pronostico.main.temp_min}°c</h2>
        </div>
        <div id="vientoCard" class="col-start-1 row-start-4 grid grid-cols-3 grid-rows-2 w-36 mt-10 ">
        <img src="icons/wind.png" class=" " alt="" srcset="">
        <h1 id="viento" class=" col-span-2 text-xl ">Viento</h1>
        <h2 id="descripViento" class="text-4xl font-bold">${pronostico.wind.speed}km/hr</h2>
        </div>
        <div id="presionCard" class="col-start-3 row-start-4 grid grid-cols-3 grid-rows-2 w-36 mt-10">
        <img src="icons/presion.png" alt="" srcset="">
        <h1 id="presion" class="col-span-2 text-xl">Presion</h1>
        <h2 id="descripPresion" class="text-4xl font-bold">${pronostico.main.pressure}</h2>
        </div>
        <div id="humedadCard" class="col-start-1 row-start-5 grid grid-cols-3 grid-rows-2 w-36 mt-10">
        <img src="icons/humedad.png" alt="" srcset="">
        <h1 id="humedad" class="col-span-2 text-xl">Humedad</h1>
        <h2 id="descripHumedad" class="text-4xl font-bold" >${pronostico.main.humidity}%</h2>
        </div>
        
   `;


   });

}

