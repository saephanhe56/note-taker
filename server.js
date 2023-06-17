const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});