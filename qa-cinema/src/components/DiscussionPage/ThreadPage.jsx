
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import forumUtils from "../../utils/forumUtils";

const ThreadPage = () => {

	const { id } = useParams();

	const [thread, setThread] = useState({});

	useEffect( ()=> {
		forumUtils.get(id).then( (resp) => {
			setThread(resp.data);	
		});
	}, []);


	console.log(thread._id);
	if (thread._id === undefined) {

		return (
			<div>
				<p>
					Loading ...
				</p>
			</div>

		);
	}


	let comments = ( <p> No comments</p>)

	if (thread.comments && thread.comments.length > 0) {
		comments = (
			thread.map( (comment) => (
				<p>  {comment.author}: {comment.msg} </p>
			))
		)
	}

	return (
		<div>
			<h2> {thread.name}</h2>
			<p>
				{thread.body}
			</p>
			<h8>
				By <b> {thread.author}</b>
			</h8>

			<h3>Comments</h3>
			<button>Add Comment</button>
			{comments}
		</div>
	)
}
 
export default ThreadPage;