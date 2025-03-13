const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const rutaHome = require("./routes/rutaHome");
const Grupo = require("./helpers/hbs/Grupos");

const app = express();

app.engine("hbs", engine({helpers: {Grupo: Grupo.grupos}}));
app.set("view engine", "hbs");
app.set("views", "Views");

app.use(express.static(path.join(__dirname,"public")));

app.use(rutaHome);

app.use((req,res) => {
    res.render("404", {layout:false});
});


app.listen(8080);