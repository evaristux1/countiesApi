const app = require("./src/config/express")();

//*Server listen 3000.
const port = 3000;
app.listen(port, function () {
  console.log("Api is running:" + port);
});
