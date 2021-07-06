
import ListMovies from "./props/ListMovies"

const AllGalleryPage = () => {
    return (<div>
        <h1>All Movies Ever Of All Time</h1>
        <ListMovies url="http://localhost:3000/movies/getAll"/>
    </div>);
}
export default AllGalleryPage;