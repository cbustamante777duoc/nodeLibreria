const { Router } = require("express");
const express = require("express");

const ruta = express.Router();

const { crearAutor,getAutors,getAutorById,deleteAutor,updateAutor } = require("../controllers/autor");

ruta.route("/")
        .post(crearAutor)
        .get(getAutors)

ruta.route("/:id")
        .get(getAutorById)
        .put(updateAutor)
        .delete(deleteAutor)

module.exports = ruta;
