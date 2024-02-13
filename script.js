async function fetchWeatherData(cityName) {
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dd85e9f54aa764f1f51044c5419577e7`;
	const responce=await fetch(url)
	const data=await responce.json();
	console.log(data)
}
function fetchCity() {
	let cityName=document.getElementById('city_name');
	if(cityName.value===""){
		alert("Enter a city name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}