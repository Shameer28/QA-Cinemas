import axios from "axios";

import ListMovies from "./../sharedcomponents/ListMovies"

const RecentMoviesPage = () => {
    const sortFunc = (a, b) => {
        return a.releaseDate > b.releaseDate;
    }
    return (<div>
        <h1>Recent Movies</h1>
        <ListMovies url="http://localhost:3000/movies/getAll" sort={sortFunc} />
    </div>);
}

export default RecentMoviesPage;