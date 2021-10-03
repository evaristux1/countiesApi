//? ***Axios Configuration***
const axios =require("axios");

// * Url IBGE counties
const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

module.exports = ibgeApi;