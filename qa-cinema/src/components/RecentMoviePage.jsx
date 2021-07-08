import ListMovies from "./props/ListMovies"

const RecentMoviesPage = () => {
	const sortFunc = (a, b) => {
		return a.releaseDate > b.releaseDate;
	}

    return (<div>
        <h1>RecentMovies</h1>
        <ListMovies sort = {sortFunc}/>
    </div>);
}
 
export default RecentMoviesPage;