const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404=document.querySelector('.not-found')


search.addEventListener('click', () => {

    const APIKey = '66897b4cd9dc7b58fd67a41fb7352cf4';
    const city =  document.querySelector('.search-box input').value;

    if (city == '' )
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=>response.json()).then(json=>{

      const image= document.querySelector('.weather-box img');
      const temperature= document.querySelector('.weather-box .temperature');
      const description= document.querySelector('.weather-box .description');
      const humidity= document.querySelector('.weather-details .humidity span');
      const wind= document.querySelector('.weather-details .wind span');


     switch (json.weather[0].main) {
        case 'Clear':
            image.src='images/clear1.jpg';
            break;

        case 'Rain':
            image.src='images/rain.jpg';
            break;
        
        case 'Snow':
            image.src='images/snow.jpg';
            break;     

        case 'Clouds':
            image.src='images/clouds.jpg';
            break;  

        case 'Haze':
            image.src='images/haze.jpg';
                break;    
               
        case 'Mist':
            image.src='images/mist.jpg';
                break;    

        default:
               image.src="images/Sun with cloud.jpg";

                break;
     }

     temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
     description.innerHTML=`${json.weather[0].description}`;
     humidity.innerHTML=`${json.main.humidity}%`;
     wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;


    } );
} );


