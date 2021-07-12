import { Link } from 'react-router-dom';
import movies from '../../utils/movies';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './DiscussionPage.css';



import { useState, useEffect } from "react"
import FormImpl from 'react-bootstrap/esm/Form';

const DiscussionRatings = () => {

	const [ratings, setRatings] = useState([]);

	// const [film, setFilm] = useState({ title: "Detective Pikachu", _id: "123123123" });

	useEffect(() => {
		movies.getRecentReviews().then((resp) => {
			setRatings(resp.data);
		});
	}, []);

	return (
		<div>
			<Link to="/reviews"><br />
				<Button type="button" variant="primary">
					Add a Review
				</Button>
			</Link>
			<br /><br />
			<h3>
				Recent Reviews
			</h3>
			<div>
				{ratings.map((rating) => {
					return <div>
						<Card>
							<Card.Header style={{}}>
								<blockquote className="blockquote mb-0">
									<p style={{ color: "black" }}><u>Movie : </u></p>
								</blockquote>
							</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p style={{ color: "black" }}>
										{rating.msg}
									</p>
									<p style={{ color: "black" }}>
										{rating.rating} out of 5
									</p>
									<footer className="blockquote-footer">
										Review by<cite title="Source Title"> {rating.name}</cite>
									</footer>
								</blockquote>
							</Card.Body>
						</Card>
						<br></br>
					</div>
				})}<br />
			</div>
		</div >
	);
}

export default DiscussionRatings;