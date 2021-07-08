import { useParams } from "react-router";
import { useEffect, useState } from "react";
import movieUtils from "../utils/movies";


const MoviePage = (url) => {
    
    const {id} = useParams();
    const [movies, setMovies] = useState({loading:true});

    useEffect(()=>{
        getData();
    },[])

	const getData = () => {
        setMovies({loading:true})

		movieUtils.get(id).then( (resp)=> {
			setMovies(resp.data);
		}).catch((err) => {
			console.log(err);
		});
	}
    
    return ( <div>
        {movies.loading ?
        (<p>Loading Movie Details</p>) : (
        <div>
            <h2>{movies.title}</h2>
            <img src={movies.image} alt={movies.title + "'s Poster"} />
            <h4><b>Director: </b> {movies.director} <br/>
                <b>Actors: </b> {movies.actors.map(t => <span>{t.name}, </span>)} <br/>
                <b>Plot: {movies.plot}</b> <br/>
                <b>Show Times: </b> {movies.showTimes.map(t => <span>{t}, </span>)} <br/>
            </h4>
        </div>
        )}
    </div> );

}
 
export default MoviePage;