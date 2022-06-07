// newer style
import express from "express";
// older style
// const express = require('express');
// import bodyParser from 'body-parser';

import {MongoClient} from 'mongodb';
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.json());
// app.use(express.static("posters"));
// const upload = multer( {dest: 'posters/'})

// app.get('/posters/:filename', async (req, res) => {
//     const { filename } = req.params;
//     const dirname = path.resolve();
//     const fullPath = path.join(dirname, 'posters/' + filename);
//     res.sendFile(fullPath);
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
// });


const app = express()

app.use(express.json());

// const client = new MongoClient('mongodb://localhost:27017');




// setting up the route - req is the request object - res is the response object
app.get('/hello', (req, res) => res.send('HellOOO THEREeee!!!!'));

//app.get is like a route in flask
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`))

//post route
//req.body accesses the body/json object info from Postman, which has "name" which is "Dawson Mercer"
app.post('/hello', (req, res)=> {
    res.send(`Hello ${req.body.name}! this is a POST`)
});
//                       upload.single('movie_poster'),
app.post('/api/addMovie',                               async(req, res) =>{
    try{
        await client.connect();

        const db = client.db('movies');

        const movieInfo = await db.collection('mymovies').insertOne({name:req.body.name, date:req.body.date, 
            actors:req.body.actors, poster:req.body.poster, rating:req.body.rating});

        res.sendStatus(200);

        client.close();

    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
        
    }
})
//TODO: replicate this for the remove movie .removeOne ^
// in the app .js add a fetch to remove the movie
app.post("/api/remove", async (req, res) => {

    // res.send(`delete ${req.body.name}`)
    try {
      await client.connect();
  
      const db = client.db("movies");
  
      const movieInfo = await db.collection("mymovies").deleteOne( {name:req.body.name});
  
      res.status(200).json(movieInfo);
  
      client.close();
    } catch (error) {
      res.sendStatus(500);
    }
  })

const client = new MongoClient('mongodb://localhost:27017');
app.get('/api/data', async (req, res) =>{
    try{
        await client.connect();

        const db = client.db('movies')

        const movieInfo = await db.collection('mymovies').find({}).toArray();
        console.log(movieInfo)

        res.status(200).json(movieInfo);

        client.close();

    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }

});

app.listen(8000, () => console.log('listening on port 8000'));
// in order to run it you use  - node src/server.mjs