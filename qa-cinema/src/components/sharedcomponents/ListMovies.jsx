
import PosterLink from "./PosterLink";

import movieUtils from "./../../utils/movies";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from "react";

const ListMovies = ({ sort }) => {

	const [data, setData] = useState([]);
	const [err, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		movieUtils.getAll().then((resp) => {
			let info = resp.data;

			if (sort) {
				// sort the info here
			}

			setLoading(false);
			setData(info);
		}).catch((err) => {
			setLoading(false);
			setError(err);
		})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <p>Loading</p>
	}

	if (err !== "") {
		return (<p>
			Oh no looks like something went wrong!
		</p>)
	}


	return (
		<div>
			<Row md={4}>
				{data.map(x =>
					<div>
						<Col xs={4}>
							<div className="image">
								<PosterLink image={x.image} _id={x._id} title={x.title}/>
								<br></br>
							</div>							
							<br></br>
						</Col>
					</div>

				)}
			</Row>
			<br></br>
		</div>
	);

}

export default ListMovies;