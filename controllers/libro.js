exports.getLibros = (req, res,next) =>{
    res.status(200).json({status:200, mensaje:'Se han devuelto todos los libros correctamente'});
}

exports.getLibro = (req, res,next) =>{
    res.status(200).json({status:200, mensaje:'Se devuelve el libro por id'});
}

exports.crearLibro = (req, res,next) =>{
    res.status(200).json({status:200, mensaje:'Se ha creado el libro correctamente'});
}

exports.actualizarLibro = (req, res,next) =>{
    res.status(200).json({status:200, mensaje:'Se ha modificado el libro correctamente'});
}

exports.eliminarLibro = (req, res,next) =>{
    res.status(200).json({status:200, mensaje:'Se ha eliminado el libro correctamente'});
}