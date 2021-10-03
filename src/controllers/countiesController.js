async function filterCounties(counties, params) {
  const querieParams = Object.keys(params);

  let countiesFormat = counties;

  let haveError = false;
  querieParams.map((param) => {
    if (!haveError) {
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
          countiesFormat = countiesFormat.filter(
            (countie) => countie.uf == params.uf
          );
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
  return countiesFormat;
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
