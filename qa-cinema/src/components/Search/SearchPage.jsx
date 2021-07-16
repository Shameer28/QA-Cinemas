
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Carousels from "./Carousel";
import axios from "axios";
import { Container } from "react-bootstrap";

const SearchPage = () => {
	const { desc } = useParams();
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("http://5.226.143.166:3000/search/" + encodeURIComponent(desc)).then((resp) => {
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
				{details.map((data) => {
					const clickFunc = (e, url) => {
						e.preventDefault();
						window.location.href = url
					}
					const id = data.id;

					if (data.type === "Movie") {
						const { image, title } = data.data;
						const url = "/movieDetail/" + id;

						return (<button onClick={(e) => { clickFunc(e, url) }} >
							Movie
						</button>)
					} else if (data.type === "Thread") {
						const { name, author } = data;
						const url = "/forums/" + id;

						return (<button onClick={(e) => { clickFunc(e, url) }}>
							Thread
						</button>)
					}

					// SOMETHING HAS GONE WRONG IF WE HAVE GOTTEN HERE

					return (<div>  </div>)
				})}
			</div>
		)
	}

	return (
		<div class="background">
			
			<Carousels></Carousels>
			<br></br>
			
			<Container>
				<div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black", paddingLeft:"10px"}}>
					<h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}> Search results for {desc}</h2><br />

					{content}
					<br></br>
					<h6> {details.length} results found.</h6>
				</div>
			</Container>
			<br></br>
		</div>
	);
}

export default SearchPage;