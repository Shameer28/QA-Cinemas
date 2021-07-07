import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const MoviePage = (url) => {
    
    const {id} = useParams();
    const [movies, setMovies] = useState({loading:true});
    //const url = "http://localhost:3000/movies/get/"; //GetByID without id ofc

    useEffect(()=>{
        getData();
    },[])

    //GET axios Call DB
    // GetOneById
    // const data = {"id":-1, "Image":"https://www.listchallenges.com/f/items2020/2324fee1-6a52-45f8-b62a-6cc5599eb35a.jpg" ,"Title":"Detective", "Actors":["Jim Carrey","Johnny Depp", "Jack Black", "John Cena", "Jake Paul"], "Director":"Jean-Pierre Jeunet", "ShowTimes":["20/20/20","10/J/J10"], "Plot":"plot here lol lermns"}
    const getData = () => {
        setMovies({loading:true})
		axios.get(url+String(id)).then((res) => {

            setMovies(res.body);

		}).catch((err) => {
			console.log(err);
		});
	}
    
    return ( <div>
        {movies.loading ?
        (<p>Loading Movie Details</p>) : (
        <div>
            <h2>{movies.Title}</h2>
            <img src={movies.Image} alt={movies.Title + "'s Poster"} />
            <h4><b>Director: </b> {movies.Director} <br/>
                <b>Actors: </b> {movies.Actors.forEach(t => <span>{t}, </span>)} <br/>
                <b>Plot: {movies.Plot}</b> <br/>
                <b>Show Times: </b> {movies.ShowTimes.forEach(t => <span>{t}, </span>)} <br/>
            </h4>
        </div>
        )}
    </div> );

}
 
export default MoviePage;