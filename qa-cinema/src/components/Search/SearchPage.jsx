
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import axios from "axios";




const SearchPage = () => {
	const { desc } = useParams();
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect( ()=> {
		axios.get("http://localhost:3000/search/" + encodeURIComponent(desc) ).then( (resp)=> {
			setDetails(resp.data);

			setLoading(false);
		})

		// talk to api for all the details that match my request;

	}, []);

	
	if (loading) {
		return (
			<div>
				Loading
			</div>
		)
	}


	let content

	if (details.length === 0) {
		content = (
			<div>
				Nothing found
			</div>
		)
	} else {
		content = (
			<div>
				{details.map( (data) => {

					// const clickFunc = ()


					if (data.type === "Movie") {
						const id = data.id;
						const {image, title} = data.data;

						return (<button>
							Movie
						</button>)
					}else if (data.type === "Thread") {
						const id = data.id;
						const {name, author} = data;
						
						return ( <button> 
							Thread
						</button>	)
					}
				}  )}
			</div>
		)
	}

	return (<div>
		<h4> Search results for {desc}</h4>
		{content}
		<h6> {details.length} results found.</h6>
	</div>);
}
 
export default SearchPage;