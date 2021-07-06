import {useState} from "react"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import DiscussionRatings from "./props/DiscussionRatings";

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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque quisquam necessitatibus eligendi excepturi illo eveniet, architecto temporibus. Quasi, aliquid. Blanditiis, facere debitis. Temporibus inventore quis ad nulla sint sed!
				</Tab>
			</Tabs>
		</div>
	)
}

export default DiscussionBoard;