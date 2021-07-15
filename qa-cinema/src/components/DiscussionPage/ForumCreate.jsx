import { useState } from "react"
import { Button } from 'react-bootstrap';
import VariableList from "../sharedcomponents/VariableList";

import forumUtils from "../../utils/forumUtils";

const ForumCreate = () => {

	const [isCreating, setCreating] = useState(false);
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");


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

		const data = {
			author: author,
			body: body,
			name: title,
		}

		forumUtils.addThread(data).then( (resp) => {
			// handle response here
		}).catch( (err) => {
			// show error
		});
	}

	if (isCreating) {
		return (<div>
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
		return (<Button onClick={activate} >Add Thread</Button>)
	}
}

export default ForumCreate;