const countiesIBGE = require("../services/externalApi");
const countiesController = require("../controllers/countiesController");
async function counties(req, res) {
  const { query } = req;
  try {

    // ? External data of counties (IBGE)
    const { data } = await countiesIBGE();

    // ?Formated this data (IBGE)

    const countiesFormated = await countiesController.formatCounties(data);

    // ? filter this data of counties (IBGE)

    const filteredCountiers = await countiesController.filterCounties(
      countiesFormated,
      query
    );
    res.status(200).send({ cities: filteredCountiers });
  } catch (err) {
    res.status(500).send({ status: false, msg: err });
  }
}

module.exports = {
  counties,
};
