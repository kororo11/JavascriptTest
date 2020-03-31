const weather = document.querySelector('.js-weather');

const API_KEY = '7f57650e8de0be6af287fad474f8d10b';
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(res => {
            return res.json(); //Promise 반환
        })
        .then(json => {
            // console.log(json); // 서버에서 주는 json데이터가 출력 됨
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position) {
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoord = JSON.parse(loadedCoords);
        // console.log('parseCoord --> ', parseCoord);
        getWeather(parseCoord.latitude, parseCoord.longitude);
    }
}

function init() {
    loadCoords();
}

init();
