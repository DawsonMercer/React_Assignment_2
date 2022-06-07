import React, { useState, useRef, useHistory } from "react";
import {Link, useLocation} from "react-router-dom";
import {Button, Form, Container, Row, Col, Alert, Card, Breadcrumb, Navbar, Nav} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './pages.css';

export function Home(){
    return(        
        <div>
            <h1>Welcome to my React Web App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna felis, egestas id accumsan ut, convallis ut sem. Aenean leo sapien, volutpat sit amet sapien sed, tristique lobortis ex. Nunc pulvinar erat ac tellus interdum malesuada. Ut at finibus enim, at eleifend sapien. Cras metus risus, cursus eget lorem at, vehicula pharetra tellus. Sed id nisi pretium nulla sollicitudin posuere. Proin a accumsan quam, eu ultricies risus. Sed lacinia ornare massa, et hendrerit tortor consequat vel. Sed efficitur suscipit blandit. Ut feugiat vitae eros cursus lacinia. Donec consectetur orci sed ex pulvinar semper. Etiam bibendum quis ligula blandit imperdiet. Sed et risus tempus, egestas erat commodo, commodo nulla. Duis nec est metus.</p>
            <p>Sed facilisis turpis in efficitur tempus. Suspendisse potenti. Vestibulum porta pretium enim, in laoreet odio posuere suscipit. Suspendisse et tempor eros. Vivamus libero mi, fermentum eget auctor ut, cursus vitae ante. Donec lacinia orci id sem auctor blandit. Sed condimentum ultrices viverra. Aenean nulla sapien, eleifend eu tortor in, ultricies aliquam sapien. Nam sit amet velit pharetra, faucibus sapien et, congue ligula. Donec ultrices justo vel dictum dictum. Pellentesque at sodales erat. Aliquam efficitur pharetra leo, ultrices molestie lectus fringilla feugiat.</p>
            
        </div>
    );
}

// const movielist = [["movie1", "1/1/2022", "Bob"],
// ["movie2", "2/2/2022", "Abby"]];
// const movielist = "Bob";


// movieList.map((movieInfo)=> console.log(movieInfo));

//TODO: add nav bar 
export function Navigation(){
    return(
        <>
        <nav>

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><h1>Dawson's React App</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/">Home</Nav.Link><br></br>&nbsp; 
                    <Nav.Link to="/formfunction">Form</Nav.Link><br></br>&nbsp; 
                    <Nav.Link to="/reviews">Reviews</Nav.Link>
                </Nav>
                </Container>
        </Navbar>
  <hr/>
            {/* <Link to="/">Home</Link><br></br>
            <Link to="/form">Form</Link><br></br>
            <Link to="/reviews">Reviews</Link> */}
            <hr/>
    </nav>

        </>
    )
    
}

export function Reviews({movies = [], onRemove = (f) =>f , onChangeMovies = f=>f}){
    // console.log(movielist);
    if (movies == null || movies == undefined) return <h1>Movies loading...</h1>
    return(
        <div background-color="black">
            {/* <nav>
                <Link to="/">Home</Link><br></br>
                <Link to="/form">Form</Link>
            </nav> */}
            <div>
            <h1>Movie Reviews</h1><br></br>
                {movies.map((movie, i)=>{
                    console.log(movie);
                    console.log(movie.name);
                    console.log(movie.poster);
                    console.log(movie.poster[0]);
                    console.log(movie.poster[1]);


                    return <>
                        <Card className="mb-3" style={{ color: "#000"}}>
                            <Card.Img src={movie.poster[0]} width={300} height={400}/>
                            <Card.Body>
                                <Card.Title>
                                Name: {movie.name}
                                </Card.Title>
                                <Card.Text>
                                Release date: {movie.date}
                                <br></br>
                                Actors:
                                {movie.actors.map((actor)=>{
                                return <>
                                <li>{actor}</li>
                                </>
                            })}
                                </Card.Text>
                                <Button variant="danger" onClick={()=>onRemove(movie.name, movie)}>DELETE</Button>
                            </Card.Body>
                        </Card>
                        
                        {/* <img src={movie.poster[0]} width={300} height={400}/> */}
                        {/* <h3>Name: {movie.name}</h3> */}
                        {/* <h3>Release date: {movie.date}</h3> */}
                        {/* <h4>Actors:
                            {movie.actors.map((actor)=>{
                                return <>
                                <li>{actor}</li>
                                </>
                            })}
                        </h4>
                        <h4>Rating: {movie.rating} stars</h4> */}
                        {/* <Button variant="danger" onClick={()=>onRemove(movie.name, movie)}>DELETE</Button> */}
                        {/* <Alert variant="danger">This is a button</Alert> */}
                        {/* <br></br>
                        <br></br>
                        <img src="images/dots.png" width={50} height={15}></img>
                        <img src="images/dots.png" width={50} height={15}></img> */}
                        {/* <br></br><br></br> */}
                    </>
                    
                })}
                {/* {movielist.map((movieInfo) =>(
                    <h3>Name: {movieInfo[0]}</h3>
                    // ,<h4>Date: {movieInfo[1]}</h4>,
                    // <h3>Actors: {movieInfo[2]}</h3>
                ))} */}
            </div>
        
            
        </div>
    );
}

export function FormFunction({addMovie = (f) =>f}){

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [actors, setActors] = useState([]);
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("5");
    const [isPending, setIsPending] = useState(false);

    const refName = useRef();
    const refDate = useRef();
    const refActors = useRef();
    const refRating = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setActors()

        // if(document.getElementById("posterSelect").value === "placeholder"){
        //     setPoster("images/movie1.jpg")
        //     console.log(poster);
        // }
        // if(document.getElementById("posterSelect").value === "images/jaws.jpg"){
        //     setPoster("images/jaws.jpg")
        //     console.log(poster);
        // }
        // if(document.getElementById("posterSelect").value === "images/joker.jpg"){
        //     setPoster("images/joker.jpg")
        //     console.log(poster);
        // }
        // if(document.getElementById("posterSelect").value === "images/shrek.png"){
        //     setPoster("images/shrek.png")
        //     console.log(poster);
        // }

        // }else{
        //     setPoster(document.getElementById("posterUpload").value)
        //     console.log(poster);
        // }
        const newMovie = {
            name: name, 
            date: date, 
            actors: actors, 
            poster: document.getElementById("posterUpload").files[0], 
            rating: rating}
        setIsPending(true);
        console.log("new movie info below")
        console.log(newMovie);
        console.log(newMovie.poster);
        console.log(document.getElementById("posterUpload").value);
        console.log(poster);
        var formdata = new FormData();
            formdata.append("name", name);
            formdata.append("date", date);
            formdata.append("actors", actors);
            formdata.append("poster", document.getElementById("posterUpload").files[0]);
            
            // $("#movie_poster").files[0]);
            formdata.append("rating", rating);

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };
        

        addMovie(newMovie, requestOptions)
        // https://www.youtube.com/watch?v=EcRFYF4B3IQ
        //TODO: check to see if placeholder or image selected. otherwise add file upload
        
        // fetch("/api/addMovie", {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(newMovie)
        // }).then(()=>{
        //     console.log("new Movie added")
        //     // setIsPending(false);
        // })

    }
    // const fileUpload = (e)=>{
    //     setPoster(e.target.value)
    //     let posterOption = document.getElementById("posterSelect");
    //     console.log(posterOption.value);
    //     console.log("hiiii")
    //     // if (posterOption.value == "upload"){
    //     //     document.getElementById("posterUpload").disabled = false;
    //     // }else{
    //     //     document.getElementById("posterUpload").disabled = true;
    //     //     document.getElementById("posterUpload").value = "";
    //     //     setPoster("images/movie1.jpg")

    //     // }
    // }

    return(
        <>
        
        <div className="formDiv">
            {/* <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/reviews">Reviews</Link>
            </nav> */}
            {/* <Form onSubmit={handleSubmit} action="/profile" method="post" enctype="multipart/form-data">
            <h2>Fill out a form!</h2>
                <Form.Group>
                    <Form.Label>Movie Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter movie name"ref={refName} required value={name} onChange={(e)=> setName(e.target.value)}/>
                    <Form.Text>Add your favourite!</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="text" placeholder="Enter release date" ref={refDate} value={date} onChange={(e)=> setDate(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Actors:</Form.Label>
                    <Form.Control type="text" placeholder="Separate actors with a ','" required ref={refActors} value={actors} onChange={(e)=> setActors(e.target.value.split(","))}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Movie Poster:</Form.Label>
                    <Form.Control type="file" placeholder="Enter file" id="posterUpload" name="movie_poster" onChange={(e)=> setPoster(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Rating:</Form.Label>
                    <Form.Select aria-label="Default select example" required ref={refRating} value={rating} onChange={(e)=> setRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                {!isPending && <Button>Add Movie</Button>}
                {isPending && <Button disabled>Movie Added...</Button>}
            </Form> */}
            
            
            <form onSubmit={handleSubmit} action="/profile" method="post" enctype="multipart/form-data">
                <label>Movie Name:</label><br></br>
                <input type="text" ref={refName} required value={name} onChange={(e)=> setName(e.target.value)}/><br/>

                <label>Release Date: </label><br></br>
                <input type="text" required ref={refDate} value={date} onChange={(e)=> setDate(e.target.value)}/><br/>

                <label>Actors: </label><br></br>
                <input type="text" required ref={refActors} value={actors} onChange={(e)=> setActors(e.target.value.split(","))}/><br/>

                {/* <label>Movie poster: </label><br></br>
                <select required value={poster} id="posterSelect" onChange={(e)=>fileUpload(e)}>
                    <option value="placeholder">Placeholder</option>
                    
                    <option value="images/jaws.jpg">Jaws</option>
                    <option value="images/joker.jpg">The Joker</option>
                    <option value="images/Shrek.png">Shrek</option>
                </select><br/> */}
                <label>Movie poster: </label><br></br>
                <input type="file" id="posterUpload" name="movie_poster" onChange={(e)=> setPoster(e.target.value)}></input><br></br>

                <label>Rating: </label><br></br>
                <select required ref={refRating} value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select><br/><br/>

                {!isPending && <button>Add Movie</button>}
                {isPending && <button disabled>Movie Added...</button>}
            </form>
        </div>
        </>
    )
}

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}

//FIXME: building up a login page
// export const LogInPage = () =>{
//     const [emailValue, setEmailValue] = useState('');
//     const [passwordValue, setPasswordValue] = useState('');
    
//     const history = useHistory();
//     onLogInClicked = async //TODO: add from "Building login page linkedin 3"
//     return(
//         <div className="content-container">
//             <h1>Log In</h1>
//             <input 
//             value={emailValue}
//             onChange={e => setEmailValue(e.target.value)}
//             placeholder="email@email.com">
//             </input>
//             <input type="password" 
//              value={passwordValue}
//              onChange={e => setPasswordValue(e.target.value)}
//             placeholder="passwordd"></input>
//             <button>Log In</button>
//             <button>For your password?</button>
//             <button>Dont have an acccount? Sign up!</button>

//         </div>
//     )
// }