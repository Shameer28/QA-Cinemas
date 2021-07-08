import { Link } from 'react-router-dom';
import movies from '../../utils/movies';


import {useState, useEffect} from "react"

const DiscussionRatings = () => {

	const [ratings, setRatings] = useState([]);

	useEffect( ()=> {
		movies.getRecentReviews().then( (resp) => {
			setRatings(resp.data);
		});
	}, []);

	return ( 
		<div>
			<Link to="/reviews">
				<button type="button">
					Add a review
				</button>
			</Link>

			<h4>
				Recent Reviews
			</h4>
			<div>
				{ratings.map( (rating) => {
					return <p> {rating.name} has given a rating of {rating.rating} to a film!</p>	
				})}
			</div>
		</div>
	);
}
 
export default DiscussionRatings;