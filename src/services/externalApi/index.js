const ibgeApi = require("../../config/axios");

//? External API call
const countiesIBGE = async () => await ibgeApi.get("/municipios");

module.exports = countiesIBGE;
