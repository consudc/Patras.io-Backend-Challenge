const { response, request } = require("express");
const axios = require("axios");
const Aeropuertos = require("../models/Aeropuertos");

const { YOUR_API_KEY } = process.env;

// eslint-disable-next-line consistent-return
const getAllCities = async (req = request, res = response) => {
  try {
    const aeropuertos = await Aeropuertos.findAll();

    const ciudadAer = aeropuertos.map((a) => a.city);

    Promise.all(
      ciudadAer.map((c) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${YOUR_API_KEY}&units=metric`
        )
      )
    ).then((nuevoArreglo) => {
      // el resultado será un arreglo nuevo con los resultados de cada Promesa (siempre que todas hayan sido resueltas)
      const tempActual = nuevoArreglo.map((d) => {
        const array = {
          temp_actual: d.data.main.temp,
          ciudad: d.data.name,
          temp_max: d.data.main.temp_max,
          temp_min: d.data.main.temp_min,
          timeZone: d.data.timezone,
        };
        return array;
      });
      res.status(200).json(tempActual);
      // el resultado está en la propiedad data del objeto devuelto
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

// eslint-disable-next-line consistent-return
const getClimatebyCode = async (req = request, res = response) => {
  const { desde, frecuencia } = req.query;
  const { code } = req.params;
  const codeUpper = code.toUpperCase();

  try {
    const findCity = await Aeropuertos.findByPk(codeUpper);

    if (findCity) {
      const { city } = findCity;

      const WeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`
      );

      // const { timezone } = WeatherResponse.data;
      // const timezoneTotal = timezone * 1000;
      const dia = new Date(Date.now()).toLocaleString();
      // .toISOString()
      // .slice(0, 19);
      const temperatureactual = {
        temp_actual: WeatherResponse.data.main.temp,
        temp_max: WeatherResponse.data.main.temp_max,
        temp_min: WeatherResponse.data.main.temp_min,
        ciudad: WeatherResponse.data.name,
        dia: dia,
        // dia: new Date(WeatherResponse.data.dt * 1000).toLocaleString(),
      };

      if (frecuencia) {
        const WeatherForecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&appid=${YOUR_API_KEY}&units=metric`
        );
        const temperatureMañana = {
          temperatura: WeatherForecast.data.list[7].main.temp,
          dia: new Date(
            WeatherForecast.data.list[7].dt * 1000
          ).toLocaleString(),
        };

        if (frecuencia === "diaria") {
          res.json({
            temperatureactual,
            temperatureMañana,
          });
        }

        if (frecuencia === "semanal") {
          res.json({
            temperatureactual,
            temperatureDia2: temperatureMañana,
            temperatureDia3: {
              temperatura: WeatherForecast.data.list[15].main.temp,
              dia: new Date(
                WeatherForecast.data.list[15].dt * 1000
              ).toLocaleString(),
            },
            temperatureDia4: {
              temperatura: WeatherForecast.data.list[23].main.temp,
              dia: new Date(
                WeatherForecast.data.list[23].dt * 1000
              ).toLocaleString(),
            },
            temperatureDia5: {
              temperatura: WeatherForecast.data.list[31].main.temp,
              dia: new Date(
                WeatherForecast.data.list[31].dt * 1000
              ).toLocaleString(),
            },
            temperatureDia6: {
              temperatura: WeatherForecast.data.list[39].main.temp,
              dia: new Date(
                WeatherForecast.data.list[39].dt * 1000
              ).toLocaleString(),
            },
          });
        }
        if (frecuencia !== "diaria" || frecuencia !== "semanal") {
          return res.status(400).json({
            ok: false,
            msg: `No existe la frecuencia ${frecuencia}`,
          });
        }
      }

      res.status(200).json({
        temperatureactual,
      });
    }
    if (!findCity) {
      return res.status(400).json({
        ok: false,
        msg: `No existe el aeropuerto ${codeUpper}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCities,
  getClimatebyCode,
};
