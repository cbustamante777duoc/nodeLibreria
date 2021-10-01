const LibroSchema = require("../models/Libro");
const ErrorResponse = require("../helpers/errorResponse");

/**
 * lista todos los libros en la base de datos
 * uso del metodo find de mongoose
 */

exports.getLibros = async (req, res, next) => {
  try {
    const libroLista = await LibroSchema.find();

    res.status(200).json(libroLista);
  } catch (error) {
    next(
      new ErrorResponse("No se pudo procesar el request" + error.message, 400)
    );
  }
};

/**
 * metodo que responde entregando un libro por id
 * uso de findById de mongoose
 */
exports.getLibroById = async (req, res, next) => {
  try {
    const libroUnique =  LibroSchema.findById(req.params.id);

    if (!libroUnique) {
      return next(new ErrorResponse("No se pudo encontrar el libro" + 400));
    }

    res.status(200).json(libroLista); // si todo sale bien
  } catch (error) {
    next(
      new ErrorResponse("No se pudo procesar el request" + error.message, 400)
    );
  }
};

exports.crearLibro = async (req, res, next) => {
    try {
        const libroUnique = await LibroSchema.create(req.body);
    
        // si todo sale bien
        res.status(200).json({
            status:200,
            data:libroUnique
        }); 

      } catch (error) {
        next(
          new ErrorResponse("No se pudo procesar el request" + error.message, 400)
        );
      }
};

exports.updateLibro = async (req, res, next) => {

    try {
        const libroUnique = await LibroSchema.findByIdAndUpdate(req.params.id, req.body)
    
        // si todo sale bien
        res.status(200).json({
            status:200,
            data:libroUnique
        }); 
        
      } catch (error) {
        next(
          new ErrorResponse("No se pudo procesar el request" + error.message, 400)
        );
      }
};

exports.deleteLibro = async (req, res, next) => {

    try {
        const libroUnique = await LibroSchema.findByIdAndDelete(req.params.id)

        if (!libroUnique) {
            return next(ErrorResponse("Rl libro no existe" + 400))
        }
    
        // si todo sale bien
        res.status(200).json({
            status:200,
            data:libroUnique
        }); 
        
      } catch (error) {
        next(
          new ErrorResponse("No se pudo procesar el request" + error.message, 400)
        );
      }
};
