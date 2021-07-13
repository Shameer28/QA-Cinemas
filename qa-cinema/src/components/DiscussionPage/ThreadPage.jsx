
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import forumUtils from "../../utils/forumUtils";
import { Container, Button, Card, Image } from "react-bootstrap";
import image1 from './../img/thread.jpg';
import './DiscussionPage.css';

const ThreadPage = () => {

	const { id } = useParams();

	const [thread, setThread] = useState({});
	const [add, setAdd] = useState(false);
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");


	useEffect(() => {
		forumUtils.get(id).then((resp) => {
			setThread(resp.data);
		});
	}, []);


	let waitingResponse = false

	const addComment = (e) => {
		e.preventDefault();
		console.log(e.target.form);


		if (waitingResponse) { return };

		waitingResponse = true;
		const form = e.target.form
		const data = {
			author: name,
			msg: msg,
		};

		forumUtils.addComment(id, data).then((resp) => {
			setThread(resp.data);
			setAdd(false);
			setName("");
			setMsg("");
			waitingResponse = false;
		}).catch(e => {
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

	let comments = (<p> No comments</p>)

	if (thread.comments && thread.comments.length > 0) {
		comments = (
			thread.comments.map((comment) => (<div>
				<Card>
					<Card.Body>
						<blockquote className="blockquote mb-0">
							<p>
								{' '}
								{comment.msg}{' '}
							</p>
							<footer style={{ fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", lineHeight: "1.1" }} className="blockquote-footer">
								By <cite title="Source Title">{comment.author}</cite>
							</footer>
						</blockquote>
					</Card.Body>
				</Card><br />

			</div>
			))
		)
	}


	let addEle = (<Button onClick={() => { setAdd(true) }}>Add Comment</Button>)
	if (add) {
		addEle = (<form>
			<fieldset>
				<legend style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", lineHeight: "1.1" }}>Comment Add</legend>
				<input name="author" placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
				<br />
				<textarea name="msg" id="msg" cols="40" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea>
				<br />
				<Button onClick={(e) => { e.preventDefault(); setAdd(false) }}>Cancel</Button> &nbsp;
				<Button onClick={addComment}>Add Comment</Button>
			</fieldset>
		</form>)
	}

	return (
		<div className="background" >
			<Image src={image1} width="100%" alt="thread banner photo" fluid />
			<Container>
				<div><br />

					<h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}> {thread.name}</h2>
					<p style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", lineHeight: "1.1" }}>
						{thread.body}
					</p>
					<h8 id="threadh8" style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", lineHeight: "1.1" }}>
						By <b> {thread.author}</b>
					</h8><br />
					<br />

					{addEle} <br />
					<br />
					<h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Comments</h3>
					<br />
					<p style={{ color: "black", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", lineHeight: "1.1" }} >

						<p>
							{comments}
						</p>

					</p>
					<br />
				</div>
			</Container>
		</div >
	)
}

export default ThreadPage;