const { Router } = require("express");
const express = require("express");

const ruta = express.Router();

const { crearAutor,getAutors,getAutorById } = require("../controllers/autor");

ruta.route("/")
        .post(crearAutor)
        .get(getAutors)

ruta.route("/:id")
        .get(getAutorById)

module.exports = ruta;
