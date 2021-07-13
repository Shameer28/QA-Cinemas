import { useState } from "react"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import DiscussionRatings from "./DiscussionRatings";
import Forum from "./Forum";
import { Button, Image, Container } from 'react-bootstrap';
import image1 from './../img/review.jpg';

const DiscussionBoard = () => {
	const [key, setKey] = useState("reviews");

	return (
		<div className="background">
			<Image src={image1} alt="review banner" width="100% fluid" /> <br /><br />
			<Container >
				<h1 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>
					Welcome to the Discussion Board
				</h1>
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
				>
					<Tab eventKey="reviews" title="Ratings">
						<DiscussionRatings />
					</Tab>
					<Tab eventKey="forum" title="Film Discussion">
						<Forum />
					</Tab>
				</Tabs>
			</Container>
		</div >
	)
}

export default DiscussionBoard;