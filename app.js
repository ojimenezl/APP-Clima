const colors = require('colors')
const clima = require('./controlador/clima');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "nombre de la ciudad",
        demand: true
    },
    opcion: {
        alias: 'o',
        desc: "puede elejir entre presión y humedad",
    }
}).argv;
const getInformacion = async(ciudad) => {
    try {
        const [temp, presion, humedad] = await clima.getClima(argv.ciudad);
        console.log(colors.yellow("------APP TEMPERATURA----------"));
        if (argv.opcion === "p") {
            return colors.green(`el clima de ${ ciudad } es de ${ temp } grados presión:${presion}`);
        } else {
            if (argv.opcion === "h") {
                return colors.green(`el clima de ${ ciudad } es de ${ temp } grados humedad:${humedad}`);
            } else {
                return colors.green(`el clima de ${ ciudad } es de ${ temp }`);
            }
        }
    } catch (e) {
        return `no se pudo obtener el clima de la ciudad de ${ ciudad }`;
    }
}
getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log)