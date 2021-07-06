import axios from "axios";
import PosterLink from "./props/PosterLink";

import ListMovies from "./props/ListMovies"

const RecentMoviesPage = () => {

	const sortFunc = (a, b) => {
		return a > b;
	}

    return (<div>
        <h1>RecentMovies</h1>
        <ListMovies url="http://localhost:3000/movies/getAll" sort = {sortFunc}/>
    </div>);
}
 
export default RecentMoviesPage;