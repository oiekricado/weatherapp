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

     <div id="infLugar" class="h-12  w-full col-span-2 grid grid-cols-2">
     <h1 id="ciudad" class="text-3xl font-bold w-64">${pronostico.name}`+`,${pronostico.sys.country}</h1>
    </div>


    <div id="temperatura" class="w-40 h-40  col-span-1 row-span-1 grid grid-cols-[50px_100px] grid-rows-[50px]">
            <img src="${iconUrl}" alt="" srcset="" class=" pt-2 pl-2">
            <h2 id="descripcion" class="pt-4 pl-2">${pronostico.weather[0].main}</h2>
            <h1 id="tempActual" class="text-3xl font-bold pl-2">${pronostico.main.temp}°C</h1>
            <div id="temperaturaPromMin" class="ml-6 text-center  w-8 h-5 grid grid-cols-2">
                <h2 id="tempMin" class="text-xs w-8 h-4">${pronostico.main.temp_min}°C</h2>
            </div>

        </div>

  


        <div id="viento" class="w-40 h-40 grid grid-cols-[50px_100px] grid-rows-[50px]">
        <img src="icons/wind.png" alt="" srcset="" class="pt-2 pl-2">
        <h2 id="descripcion" class="pt-2 pl-2">Viento</h2>
        <div id="infoViento" class=" ">
            <h1 id="tempActual" class="text-3xl font-bold">${pronostico.wind.speed}Km/hr</h1>
        </div>

    </div>

    <div id="presion" class="h-30 w-40 grid grid-cols-[50px_100px] grid-rows-[40px]">
            <img src="icons/presion.png" alt="" srcset="" class="pt-2 pl-2">
            <h2 id="descripcion" class="pt-3 pl-2">Presion</h2>
            <div id="infoPresion" class="">
                <h1 id="tempActual" class="text-3xl font-bold pl-3 mb-2">${pronostico.main.pressure}</h1>
            </div>

        </div>


        <div id="humedad" class="h-30 w-40 grid grid-cols-[50px_100px] grid-rows-[40px]">
        <img src="icons/humedad.png" alt="" srcset="" class="pt-2 pl-2">
        <h2 id="descripcion" class="pt-3 ">humedad</h2>
        <div id="infoViento" class="">
            <h1 id="tempActual" class="text-3xl font-bold pl-3 mb-2">${pronostico.main.humidity}%</h1>
        </div>

    </div>
   `;
   });

}

