import { Link } from 'react-router-dom';

const DiscussionRatings = () => {

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
				Most recent 10? Reviews
			</div>
		</div>
	);
}
 
export default DiscussionRatings;