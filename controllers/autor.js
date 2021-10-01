const Autor = require("../models/Autor");
const ErrorResponse = require("../helpers/errorResponse");

exports.crearAutor = async (req, res, next) => {
  try {
    const autorData = await Autor.create(req.body);
    
    res.status(200).json({
      status: 200,
      data: autorData,
    });
  } catch (error) {
    next(new ErrorResponse('Errores no es posible crear el autor '+error.message, 404));
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
    next(new ErrorResponse('No se puedo procesar el request '+error.message, 404));
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

  
    if (!autor) {
      return next(new ErrorResponse('El autor no existe en la bd con ese id '+req.params.id, 404));
    }

    res.status(200).json(autor);//si todo sale bien

  } catch (error) {
    //si se equivoca con el id
    next(new ErrorResponse('El autor no existe con este id '+req.params.id, 404));

  }
};

/**
 * metodo que actualiza el autor y devuelve los datos del autor actualizado
 * uso de mongoose findByIdAndUpdate
 * req.params.id = id
 * req.body = la data que devuelve
 */
exports.updateAutor = async (req, res, next) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body)

    if (!autor) {
      return next(new ErrorResponse('El autor no existe con este id '+req.params.id, 404));
    }

    //devuelve el autor actualizado
    res.status(200).json({status:200, data:autor});

  } catch (error) {
    next(new ErrorResponse('El autor no existe con este id '+req.params.id, 404));
  }
};

/**
 * metodo que eliminar un autor y devuelve el estatus 200
 * uso de mongoose meotodo findByIdAndDelete
 * en caso de no encontrase manda el error 400
 * 
 */

exports.deleteAutor = async (req, res, next) => {
  try {
    const autor = await Autor.findByIdAndDelete(req.params.id)

    if (!autor) {
      return next(new ErrorResponse('El autor no existe con este id '+req.params.id, 404));
    }

    res.status(200).json({status:200});

  } catch (error) {
    next(new ErrorResponse('El autor no existe con este id '+req.params.id, 404));
  }
};