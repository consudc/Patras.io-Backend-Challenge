const { assert, expect } = require("chai");
const should = require("chai").should();
const axios = require("axios");

const {
  getAllCities,
  getClimatebyCode,
} = require("../../src/controllers/clima");

// Results

const SERVER = "http://localhost:3000/api/v1/aeropuertos/";

describe("API REST CONTROL", () => {
  // eslint-disable-next-line no-undef
  it("GET /debe devolver todos los aeropuertos", async () => {
    const response = await axios(`${SERVER}`);
    expect(response.status).to.equal(200);
})

  it("GET /debe devolver todos los aeropuertos en forma de array", async () => {
    const response = await axios(`${SERVER}`);
    const aeropuertos = await response.data;
    expect(aeropuertos).to.be.an("Array");
  });
  // eslint-disable-next-line no-restricted-syntax

  it("GET /cada aeropuerto es un objeto", async () => {
    const response = await axios(`${SERVER}`);
    const aeropuertos = await response.data;
    // eslint-disable-next-line no-restricted-syntax
    for (const aer of aeropuertos) {
      expect(aer).to.be.an("Object");
      expect(aer.temp_actual).to.be.a("Number");
      expect(aer.ciudad).to.be.a("String");
      expect(aer.temp_max).to.be.a("Number");
      expect(aer.temp_min).to.be.a("Number");
    }
  });
});
