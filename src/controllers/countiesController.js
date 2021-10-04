async function filterCounties(counties, params) {
  const querieParams = Object.keys(params);

  let countiesFormat = counties;
  let msgErrorUf = "";
  let haveError = false;
  querieParams.map((param) => {
    // ? if this param dont have error
    if (!haveError) {
      // ?Check the passed query params
      switch (param) {
        case "region":
          countiesFormat = countiesFormat.filter((countie) => {
            const regionName = countie.region.toUpperCase();
            const regionQuery = params.region.toUpperCase();
            if (regionName.includes(regionQuery)) {
              return countie;
            }
          });
          break;
        case "uf":
          if (params.uf.toUpperCase() !== params.uf || params.uf.length != 2) {
            haveError = true;
            params.uf.length != 2
              ? (msgErrorUf = "the uf field must have only two letters")
              : (msgErrorUf = "invalid uf field, its value must be upper case");
          } else {
            countiesFormat = countiesFormat.filter(
              (countie) => countie.uf == params.uf
            );
          }
          break;
        case "name":
          countiesFormat = countiesFormat.filter((countie) => {
            const countieName = countie.name.toUpperCase();
            const nameQuery = params.name.toUpperCase();
            if (countieName.includes(nameQuery)) {
              return countie;
            }
          });
          break;
        default:
          break;
      }
    }
  });
  if (haveError) {
    return {
      status: false,
      msg: msgErrorUf,
    };
  } else {
    return { status: true, counties: countiesFormat };
  }
}

async function formatCounties(counties) {
  try {
    let formatedCounties = [];
    counties.map((countie) => {
      formatedCounties.push({
        id: countie.id,
        name: countie.nome,
        state: countie.microrregiao.mesorregiao.UF.nome,
        uf: countie.microrregiao.mesorregiao.UF.sigla.toUpperCase(),
        region: countie.microrregiao.mesorregiao.UF.regiao.nome,
      });
    });

    return formatedCounties;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  filterCounties,
  formatCounties,
};
