
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
		});

		// eslint-disable-next-line
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
					const clickFunc = (e, url)=> {
						e.preventDefault();
						window.location.href = url
					}
					const id = data.id;

					if (data.type === "Movie") {
						const {image, title} = data.data;
						const url = "/movieDetail/" + id;

						return (<button onClick = {  (e) => {  clickFunc(e, url)} } >
							Movie
						</button>)
					}else if (data.type === "Thread") {
						const {name, author} = data;
						const url = "/forums/" + id;

						return ( <button onClick = {  (e) => {  clickFunc(e, url) } }> 
							Thread
						</button>)
					}

					// SOMETHING HAS GONE WRONG IF WE HAVE GOTTEN HERE

					return (<div>  </div> )
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