import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const MoviePage = (url) => {
    
    const {id} = useParams();
    //const url = "http://localhost:3000/movies/get/"; //GetByID without id ofc

    useEffect(()=>{
        getData();
    },[])

    let data = {}

    //GET axios Call DB
    // GetOneById
    // const data = {"id":-1, "Image":"https://www.listchallenges.com/f/items2020/2324fee1-6a52-45f8-b62a-6cc5599eb35a.jpg" ,"Title":"Detective", "Actors":["Jim Carrey","Johnny Depp", "Jack Black", "John Cena", "Jake Paul"], "Director":"Jean-Pierre Jeunet", "ShowTimes":["20/20/20","10/J/J10"], "Plot":"plot here lol lermns"}
    const getData = () => {
		axios.get(url+String(id)).then((res) => {

            data = res.body;

		}).catch((err) => {
			console.log(err);
		});
	}
    
    return ( <div>
        <h2>{data.Title}</h2>
        <img src={data.Image} alt={data.Title + "'s Poster"} />
        <h4><b>Director: </b> {data.Director} <br/>
            <b>Actors: </b> {data.Actors.forEach(t => <span>{t}, </span>)} <br/>
            <b>Plot: {data.Plot}</b> <br/>
            <b>Show Times: </b> {data.ShowTimes.forEach(t => <span>{t}, </span>)} <br/>
        </h4>
    </div> );

}
 
export default MoviePage;