import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Reviews, FormFunction, Whoops404, Navigation } from "./pages";
import {Button, Navbar} from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [movies, setMovies ] = useState(null);

  useEffect( ()=>{
    //load JSON data

    const fetchData = async () =>{
      const result = await fetch("/api/data");
      const body = await result.json();
      setMovies(body);

    }
    fetchData();
    // fetch("/api/data")
    // .then(response => response.json())
    // .then(setMovies)
    // .then(console.log(movies))
    // .catch(e=> console.log(e.message));
  },[])
  // NEED TO USE USE STATE THUS USE USE STATE HOOK BECAUSE WE WANT TO REFRESH
  if(!movies) return null;

  if (movies){
    return (
      <div className="App bg-dark text-light">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reviews' element={<Reviews movies={movies} setMovies={setMovies} 
          onRemove = {(name, passedMovieInfo) =>{
            const updatedMovieList = movies.filter((movie)=> movie.name !== name);
            console.log(`movie name to remove ${name}`)
            console.log(`movie info to remove ${passedMovieInfo}`)
            setMovies(updatedMovieList);
            // TODO: fetch remove here - pass in a json with the info name, actor etc, 
            // search up insert remove for mongodb

            fetch('/api/remove', {
              method: 'POST',
              body: JSON.stringify(passedMovieInfo),
              headers: {'Content-Type': 'application/json'}
            })
        
            fetch('/api/data')
              .then((response) => response.json())
              .then(setMovies);

            // const fetchData = async () =>{
            //   const result = await fetch('/api/remove');
            //   const body = await result.json();
            //   setMovies(body);
        
            // }
            // fetchData();
        
          }}
          />}/>
          <Route path='/formfunction' element={<FormFunction 
          addMovie = {(newMovie, requestOptions) =>{
            console.log(`theres a new movie being added...${newMovie.name}`)
            setMovies([...movies, newMovie])

            //new code added
            // fetch("/api/addMovie", newMovie)
            //   .then(response => response.json())
            //   .then(setMovies)
            //   .catch(error => console.log('error', error));

              fetch('/api/addMovie', {
                method: 'POST',
                body: JSON.stringify(newMovie),
                headers: {'Content-Type': 'application/json'}
              })

              // fetch('/api/data')
              // .then((response) => response.json())
              // .then(setMovies);


          }}/>}/>
          <Route path='*' element={<Whoops404 />}/>
        </Routes>
        {/* <Button>Test Button</Button> */}

      </div>
    );
  }
}

export default App;
