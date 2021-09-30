const Autor = require("../models/Autor");


exports.crearAutor = async (req, res, next) => {
  try {
    const autorData = await Autor.create(req.body);
    
    res.status(200).json({
      status: 200,
      data: autorData,
    });
  } catch (error) {
    res.status(400).json({ status: 400, mensaje: error });
  }
};

/**
 * metodo que devuelve la lista de autores
 * uso del metodo fin de mongoose
 * 
 */
exports.getAutors = async (req, res, next) => {
  try {
    const autorLista = await Autor.find();

    res.status(200).json(autorLista);
  } catch (error) {
    res.status(400).json({ status: 400, mensaje: error });
  }
};

/**
 * devuelve el autor solamente con la  ID solicitada
 * uso de findById de mongoose
 * 
 */

exports.getAutorById = async (req, res, next) => {
  try {
    const autor = await Autor.findById(req.params.id)

    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ status: 400, mensaje: error });
  }
};