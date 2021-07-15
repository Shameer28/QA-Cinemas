import forumUtils from "../../utils/forumUtils";
import ForumCreate from "./ForumCreate";

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';

const Forum = () => {

	const [forums, setForums] = useState([])

	// const numcomms = (forums) => {
	// 	let count = 0;
	// 	for (let i = 0; i < forum.length; i++) {
	// 		count++
	// 	}
	useEffect(() => {
		forumUtils.getAll().then((resp) => {
			console.log(resp.data);
			setForums(resp.data);
		}).catch((err) => {

		});
	}, []);

	return (
		<div>
			<br />
			<ForumCreate /> <br /><br />
			<h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>
				Forum
			</h3>
			<br />
			{forums.map((forum) => (
				<div key={forum._id}>
					<Link id="forumlink" to={"/forums/" + forum._id}>
						<Card style={{ backgroundColor: "#212529", color: "white" }}>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										Topic : <b>{forum.name}</b>
									</p>
									{/* <p>
										Comments
									</p> */}
									<footer className="blockquote-footer" style={{ color: "white" }}>
										By<cite title="Source Title"> {forum.author}</cite>
									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Link>
					<br />
				</div>
			))}
		</div>);
}

export default Forum;