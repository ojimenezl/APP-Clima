const axios = require('axios');
const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudadURL }&appid=d946b744b54cbcee59a11427e833f855&units=metric`)
    return [resp.data.main.temp, resp.data.main.pressure, resp.data.main.humidity];
}

module.exports = {
    getClima,

}