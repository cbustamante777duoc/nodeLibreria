const dotenv = require('dotenv');
const express = require('express');

dotenv.config({path:'./config/config.env'});

const app = express();

/**
 * metodo que devuelve un respuesta 200 al momento consultar la api
 */
app.get('/api/Libro',(req,res) => {
  res.status(200).json(
      {status:200, mensaje:'Se proceso correctamente'});

});

/**
 * metodo que devuelve un respuesta 200 al momento consultar la api POR ID
 */
app.get('/api/Libro/:id',(req,res) => {
    res.status(200).json(
        {status:200, mensaje:'Se devuelve el libro por id'});
  
  });

/**
 * metodo que crea un libro por el metodo post
 */

  app.post('/api/Libro',(req,res) => {
    res.status(200).json(
        {status:200, mensaje:'Se ha creado el libro correctamente'});
  
  });
/**
 * metodo que modifica un libro por el metodo put mas la ID
 */
  app.put('/api/Libro/:id',(req,res) => {
    res.status(200).json(
        {status:200, mensaje:'Se ha modificado el libro correctamente'});
  
  });

  /**
 * metodo que elimina un libro por el metodo delete mas la ID
 */
   app.delete('/api/Libro/:id',(req,res) => {
    res.status(200).json(
        {status:200, mensaje:'Se ha eliminado el libro correctamente'});
  
  });


//encaso que el valor sea indefinido utiliza el 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('servidor se ejecuta en ambiente', process.env.NODE_ENV));