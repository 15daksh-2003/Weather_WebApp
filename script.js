const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43b4292381mshf9cd09c41aef17fp186c08jsn0c12c4ce4ace',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((response) => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${"Shanghai"}`, options)
	.then(response => response.json())
	.then((response) => {


        console.log(response)

        cloud_pctS.innerHTML = response.cloud_pct
        feels_likeS.innerHTML = response.feels_like
        humidityS.innerHTML = response.humidity
        max_tempS.innerHTML = response.max_temp
        min_tempS.innerHTML = response.min_temp
        sunriseS.innerHTML = response.sunrise
        sunsetS.innerHTML = response.sunset
        tempS.innerHTML = response.temp
        wind_degreesS.innerHTML = response.wind_degrees
        wind_speedS.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${"Boston"}`, options)
	.then(response => response.json())
	.then((response) => {


        console.log(response)

        cloud_pctB.innerHTML = response.cloud_pct
        feels_likeB.innerHTML = response.feels_like
        humidityB.innerHTML = response.humidity
        max_tempB.innerHTML = response.max_temp
        min_tempB.innerHTML = response.min_temp
        sunriseB.innerHTML = response.sunrise
        sunsetB.innerHTML = response.sunset
        tempB.innerHTML = response.temp
        wind_degreesB.innerHTML = response.wind_degrees
        wind_speedB.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${"Lucknow"}`, options)
	.then(response => response.json())
	.then((response) => {


        console.log(response)

        cloud_pctL.innerHTML = response.cloud_pct
        feels_likeL.innerHTML = response.feels_like
        humidityL.innerHTML = response.humidity
        max_tempL.innerHTML = response.max_temp
        min_tempL.innerHTML = response.min_temp
        sunriseL.innerHTML = response.sunrise
        sunsetL.innerHTML = response.sunset
        tempL.innerHTML = response.temp
        wind_degreesL.innerHTML = response.wind_degrees
        wind_speedL.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${"Kolkata"}`, options)
	.then(response => response.json())
	.then((response) => {


        console.log(response)

        cloud_pctK.innerHTML = response.cloud_pct
        feels_likeK.innerHTML = response.feels_like
        humidityK.innerHTML = response.humidity
        max_tempK.innerHTML = response.max_temp
        min_tempK.innerHTML = response.min_temp
        sunriseK.innerHTML = response.sunrise
        sunsetK.innerHTML = response.sunset
        tempK.innerHTML = response.temp
        wind_degreesK.innerHTML = response.wind_degrees
        wind_speedK.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}

submit.addEventListener('click',(e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");