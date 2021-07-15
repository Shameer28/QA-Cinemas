import { useState } from "react"
import { Button, Modal } from 'react-bootstrap';
import VariableList from "../sharedcomponents/VariableList";

import forumUtils from "../../utils/forumUtils";

const ForumCreate = () => {

	const [isCreating, setCreating] = useState(false);
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const [show, setShow] = useState(0);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [tags, setTags] = useState([""])

	const updateTags = (value, id) => {
		setTags((x) => {
			x[id] = value;
			return [...x];
		});
	}

	const activate = (e) => {
		e.preventDefault();
		setCreating(true);
	}

	const deactivate = (e) => {
		e.preventDefault();
		setCreating(false);

	}

	const submit = (e) => {
		e.preventDefault();
		handleShow();

		const data = {
			author: author,
			body: body,
			name: title,
		}

		forumUtils.addThread(data).then((resp) => {
			setShow(1);
			setCreating(false);
		}).catch((err) => {
			setShow(2);
			setShow(3);


		});
	}

	let modal = (<div></div>)


	if (show === 1) {
		modal = (<Modal show={show} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>System Message</Modal.Title>
			</Modal.Header>
			<Modal.Body>Review added successfully!</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose} href="/discussionboard">
					Close
				</Button>
			</Modal.Footer>
		</Modal>)
	}
	else if (show === 2) {
		modal = (<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>System Message</Modal.Title>
				</Modal.Header>
				<Modal.Body>Looks like something went wrong, please try again</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose} href="/discussionboard">
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>)
	}


	if (isCreating) {
		return (<div>
			{modal}
			<form action="">
				<fieldset>
					<legend style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Your details</legend>
					<input placeholder="Author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
				</fieldset>
				<br />
				<fieldset>
					<legend style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Post Information</legend>
					<input placeholder="Post Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />

					<br></br>
					<textarea name="body" id="" cols="40" rows="10" value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
					<br></br>

					<label style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Tags</label>
					<VariableList data={tags} defaultVal="" setFunc={setTags} updateFunc={updateTags} />

				</fieldset><br />
				<Button onClick={submit} >Add Post</Button>
			</form><br />
			<Button onClick={deactivate} >Cancel</Button>
		</div >)
	}
	else {
		return (<div>
			{modal}
			<Button onClick={activate} >Add Thread</Button>
		</div>)
	}


}

export default ForumCreate;