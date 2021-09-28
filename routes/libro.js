const express = require('express');
const ruta = express.Router();


/**
 * metodo que devuelve un respuesta 200 al momento consultar la api
 */
 ruta.get('/',(req,res) => {
    res.status(200).json(
        {status:200, mensaje:'Se proceso correctamente'});
  
  });
  
  /**
   * metodo que devuelve un respuesta 200 al momento consultar la api POR ID
   */
   ruta.get('/:id',(req,res) => {
      res.status(200).json(
          {status:200, mensaje:'Se devuelve el libro por id'});
    
    });
  
  /**
   * metodo que crea un libro por el metodo post
   */
  
   ruta.post('/',(req,res) => {
      res.status(200).json(
          {status:200, mensaje:'Se ha creado el libro correctamente'});
    
    });
  /**
   * metodo que modifica un libro por el metodo put mas la ID
   */
   ruta.put('/:id',(req,res) => {
      res.status(200).json(
          {status:200, mensaje:'Se ha modificado el libro correctamente'});
    
    });
  
    /**
   * metodo que elimina un libro por el metodo delete mas la ID
   */
     ruta.delete('/:id',(req,res) => {
      res.status(200).json(
          {status:200, mensaje:'Se ha eliminado el libro correctamente'});
    
    });
  
    module.exports = ruta;