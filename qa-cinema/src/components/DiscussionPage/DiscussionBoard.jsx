import {useState} from "react"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import DiscussionRatings from "./DiscussionRatings";
import Forum from "./Forum";

const DiscussionBoard = () => {
	const [key, setKey] = useState("reviews");

	return (  
		<div>
			<h3>
				Welcome to the discussion board
			</h3>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
			>
				<Tab eventKey="reviews" title="Ratings">
					<DiscussionRatings/>	
				</Tab>
				<Tab eventKey="forum" title="Film Discussion">
					<Forum/>
				</Tab>
			</Tabs>
		</div>
	)
}

export default DiscussionBoard;