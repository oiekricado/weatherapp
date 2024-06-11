console.log("hola")
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

     <div id="infLugar" class="lg:h-12 lg:col-start-1 lg:row-start-1 w-64 ">
     <h1 id="ciudad" class="text-3xl font-bold w-64 text-center">${pronostico.name}`+`,${pronostico.sys.country}</h1>
    </div>


    <div id="temperatura" class=" w-subgrid h-64 lg:w-40 lg:h-40 lg:col-start-2 lg:row-start-1 md:row-start-1/3 grid grid-cols-3 grid-rows-2 ">
            <img src="${iconUrl}" alt="" srcset="" class=" h-32 pt-2 pl-2">
            <h2 id="descripcion" class="pt-4 pl-2 text-6xl col-start-2 ">${pronostico.weather[0].main}</h2>
            <h1 id="tempActual" class="col-start-1  row-start-2 text-8xl font-bold pl-2">${pronostico.main.temp}°C</h1>
            

        </div>

  


        <div id="viento" class="lg:w-40 lg:h-40 lg: lg:col-start-3 lg:row-start-1 md:col-start-2 md:row-start-2 grid grid-cols-[50px_100px] grid-rows-[50px]">
        <img src="icons/wind.png" alt="" srcset="" class="pt-2 pl-2">
        <h2 id="descripcion" class="pt-2 pl-2">Viento</h2>
        <div id="infoViento" class=" ">
            <h1 id="tempActual" class="text-3xl font-bold">${pronostico.wind.speed}Km/hr</h1>
        </div>

    </div>

    <div id="presion" class="lg:h-30 lg:w-40 lg:col-start-4 lg:row-start-1 md:col-start-1 md:row-start-3 grid grid-cols-[50px_100px] grid-rows-[40px]">
            <img src="icons/presion.png" alt="" srcset="" class="pt-2 pl-2">
            <h2 id="descripcion" class="pt-3 pl-2">Presion</h2>
            <div id="infoPresion" class="">
                <h1 id="tempActual" class="text-3xl font-bold pl-3 mb-2">${pronostico.main.pressure}</h1>
            </div>

        </div>


        <div id="humedad" class="lg:h-30 lg:w-40 grid lg:col-start-5 lg:row-start-1 md:row-start-3 grid-cols-[50px_100px] grid-rows-[40px]">
        <img src="icons/humedad.png" alt="" srcset="" class="pt-2 pl-2">
        <h2 id="descripcion" class="pt-3 ">humedad</h2>
        <div id="infoViento" class="">
            <h1 id="tempActual" class="text-3xl font-bold pl-3 mb-2">${pronostico.main.humidity}%</h1>
        </div>

    </div>
   `;
   });

}

