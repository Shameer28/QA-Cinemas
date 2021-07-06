
import PosterLink from "./PosterLink";

import axios from "axios";

import { useState, useEffect } from "react";

const ListMovies = ({ url, sort }) => {

	const [data, setData] = useState([]);
	const [err, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const getData = () => {
		axios.get(url).then((resp) => {

			let info = resp.data;

			if (sort) {
				// sort the info here
			}

			setLoading(false);
			setData(info);
		}).catch((err) => {
			setLoading(false);
			setError(err);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	if (loading) {
		return <p>Loading</p>
	}

	if (err !== "") {
		return (<p>
			Oh no looks like something went wrong!
		</p>)
	}

	return (<div>
		{data.map(x => <PosterLink image={x.image} _id={x._id} />)}
	</div>);
}

export default ListMovies;