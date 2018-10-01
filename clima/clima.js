const axios = require('axios');

const getweather = async(lat,lon) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=64f33c8b41de0f5e14955588b4b1a796`);


    if(resp.data.cod != 200){
        throw new Error('Error, las coordenadas ingresadas no son validas');
    }


    let temp = resp.data.main.temp;

    return {
        temperatura: temp
    };
}

module.exports  = {
    getweather
};


// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=64f33c8b41de0f5e14955588b4b1a796