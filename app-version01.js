const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


console.log(argv.direccion);

let encodeurl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeurl}&key=AIzaSyCCq-6mLNX_zqv_8Mfax_IG1kQud4kWhE4`)
    .then(resp => {
        // console.log(JSON.stringify(resp.data, undefined, 2)); //para manejar la resolucion de la promesa 

        /* Primera forma:
        let faddress = respuesta.map(JSON.stringify)[0]; //Convierte a array
        let asd = JSON.parse(faddress); //convierte a json
        console.log(asd.formatted_address); //location
        console.log(asd.geometry.location);
        */

        //Segunda forma: 
        let respuesta = resp.data.results[0];
        console.log(respuesta.formatted_address);
        console.log(respuesta.geometry.location);


    })
    .catch(e => console.log('ERROR!!', e)); // para manejar el error



