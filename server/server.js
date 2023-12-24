const express = require('express');
const app = express();
const server = http.createrServer(app);
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');



app.use(bodyParser.json({
  limit: "10000mb",
}));
// only parsed url encoded bodies
app.use(bodyParser.urlencoded({extended: true, limit: "10000mb"}));















server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});