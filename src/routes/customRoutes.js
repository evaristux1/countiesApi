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
    //? IF not have error with uf
    if (filteredCountiers.status) {
      //? return data > 0
      filteredCountiers.counties.length
        ? res.status(200).send(filteredCountiers.counties)
        : res
            .status(404)
            .send({ message: "no city was found with the given parameters" });
    } else {
      res.status(400).send({ message: filteredCountiers.msg });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: err });
  }
}

module.exports = {
  counties,
};
