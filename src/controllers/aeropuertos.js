const { response, request } = require("express");
const Aeropuertos = require("../models/Aeropuertos");

// eslint-disable-next-line consistent-return
const addAeropuerto = async (req = request, res = response) => {
  const { code, city, name } = req.body;

  try {
    // insertamos en la base de datos el service
    const query = code.toUpperCase();
    const buscarAerop = await Aeropuertos.findOne({
      where: {
        code: query,
      },
    });

    if (buscarAerop) {
      return res.status(400).json({
        ok: false,
        msg: `Ya exise el aeropuerto ${query}`,
      });
    }

    const newAeropuerto = await Aeropuertos.create({
      code: query,
      name: name,
      city: city,
    });

    return res.json({
      ok: true,
      code: newAeropuerto.code,
      name: newAeropuerto.name,
      city: newAeropuerto.city,
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
const getAeropuerto = async (req = request, res = response) => {
  const { code } = req.query;

  try {
    const aeropuertos = await Aeropuertos.findAll({
      attributes: ["code", "name", "city"],
    });

    if (code) {
      // const aerop = aeropuertos.find((a) => a.code.toUppercase() === code.toUpperCase());
      const aerop = aeropuertos.filter((a) =>
        a.code.toUpperCase().includes(code.toUpperCase())
      );
      //   console.log(aerop);

      if (aerop.length) {
        return res.status(200).json({
          ok: true,
          aerop,
        });
      }

      return res.status(500).json({
        ok: false,
        msg: "Aeropuerto no encontrado",
      });
    }

    return res.status(200).json({
      ok: true,
      aeropuertos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  addAeropuerto,
  getAeropuerto,
};
