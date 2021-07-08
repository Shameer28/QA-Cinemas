import forumUtils from "../../utils/forumUtils";
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react"

const Forum = () => {
	
	const [forums, setForums] = useState([])


	useEffect( ()=> {
		forumUtils.getAll().then( (resp)=> {
			console.log(resp.data);
			setForums(resp.data);
		}).catch( (err) => {

		});
	}, []);
	
		
	return ( <div>
		<button>Add Thread</button>
		<h4>
			Forum
		</h4>

		{ forums.map( (forum)=> (
			<div key ={forum._id}> 
				<Link to= {"/forums/" + forum._id }>
					<button>
						<h5> {forum.name} </h5>
						<h6> by {forum.author} </h6>
					</button>
				</Link>
			</div>
		))}
	</div> );
}
 
export default Forum;