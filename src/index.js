const axios = require(`axios`);
const app = require("./app");

const YOUR_API_KEY = "0f4c4e86820fa3c53972023f91deab2b";

app.listen(3000);
console.log("listening to port 3000");

// Buenos Aires (Aeropuerto Ezeiza) SAEZ
// Mendoza (aeropuerto de la capital) SAME /Santiago de Chile (Aeropuerto Arturo Benitez) SCEL

const findApi = async () => {
  try {
    const primeraPag = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${YOUR_API_KEY}`
      )
    ).data;

    console.log(primeraPag.list[2]);

    // (`https://api.openweathermap.org/data/2.5/weather?q=york&appid=
    // ${YOUR_API_KEY}`)).data
    // return primeraPag
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error en la petición", error);
    throw error;
  }
};

findApi();

const GMT3 = 10800000;

const dia = new Date(Date.now() - GMT3).toISOString().slice(0, 19);

console.log(dia);
