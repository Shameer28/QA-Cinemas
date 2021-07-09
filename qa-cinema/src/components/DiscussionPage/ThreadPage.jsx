
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import forumUtils from "../../utils/forumUtils";

const ThreadPage = () => {

	const { id } = useParams();

	const [thread, setThread] = useState({});
	const [add, setAdd] = useState(false);
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");


	useEffect( ()=> {
		forumUtils.get(id).then( (resp) => {
			setThread(resp.data);	
		});
	}, []);


	let waitingResponse = false

	const addComment = (e)=> {
		e.preventDefault();
		console.log(e.target.form);
		
		
		if (waitingResponse) {return};

		waitingResponse = true;
		const form = e.target.form
		const data = {
			author: name,
			msg: msg,
		};

		forumUtils.addComment(id, data).then( (resp) => {
			setThread(resp.data);
			setAdd(false);
			setName("");
			setMsg("");
			waitingResponse = false;
		}).catch(e=> {
			waitingResponse = false;	
		});
	};

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
			thread.comments.map( (comment) => (
				<p>  {comment.author}: {comment.msg} </p>
			))
		)
	}


	let addEle = (<button onClick = { ()=> {setAdd(true) }}>Add Comment</button>)
	if (add) {
		addEle = (<form>
			<fieldset>
				<legend>Comment Add</legend>
				<input name="author" placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
				<br/>
				<textarea name="msg" id="msg" cols="30" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea>
				<br/>
				<button onClick = {  (e)=> {  e.preventDefault(); setAdd(false)}  }>Cancel</button>
				<button onClick = {addComment}>Add Comment</button>
			</fieldset>
		</form>)
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
			{addEle}
			{comments}
		</div>
	)
}
 
export default ThreadPage;