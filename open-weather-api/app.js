const input = document.querySelector('input');
const button = document.querySelector('button');
const key = `54e9b766effdfd90601182075151bcbe`;
const city = 'http://api.openweathermap.org/data/2.5/weather?q='
const zip = `http://api.openweathermap.org/data/2.5/weather?zip=`
const div = document.querySelector('div');

button.addEventListener('click', weather)

async function weather() {
  div.innerHTML = ''
  const search = input.value;
  let response;
  if (isNaN(search)) {
    response = await axios.get(`${city + search}&units=imperial&appid=${key}`)
  } else {
    response = await axios.get(`${zip + search},us&units=imperial&appid=${key}`)
  };
  if (response.data.main.temp > 90) {
    div.style.backgroundColor = `rgba(210, 28, 28, .4)`
  } else if (response.data.main.temp < 32) {
    div.style.backgroundColor = `rgba(28, 28, 210, .4)`
  } else {
    div.style.backgroundColor = `rgba(255, 255, 255, .4)`
  };
  div.innerHTML =
    `<p>Location: ${response.data.name}</p>
    <p> description: ${response.data.weather[0].description}</p>
    <p>current temp: ${response.data.main.temp}</p>
    <p>min temp: ${response.data.main.temp_min}</p>
    <p>max temp: ${response.data.main.temp_max}</p>`
}