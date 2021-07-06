
import {useState} from "react"

const ReviewAddPage = () => {

	const [stage, setStage] = useState(0);

	const [films, setFilms] = useState([]);

	if (stage === 0) {
		return ( <div>
			<h4> Select a film to add a review</h4>

			<div>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
				<p>films</p>
			</div>


		</div>
		)

	}



	return ( <div>
		<p>
			ahasdasdasd
		</p>	
	</div>);
}
 
export default ReviewAddPage;