import { Container } from "react-bootstrap";
import ListMovies from "./../sharedcomponents/ListMovies"

const RecentMoviesPage = () => {
    const sortFunc = (a, b) => {
        return a.releaseDate > b.releaseDate;
    }
    
    return (
        <div class="background">
            <br></br>
            <Container>                
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Recent Movies</h2>
                <br></br>
                <ListMovies sort={sortFunc} />
            </Container>
        </div>);
}
export default RecentMoviesPage;
