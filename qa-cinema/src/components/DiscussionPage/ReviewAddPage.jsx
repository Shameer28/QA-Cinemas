
import { useState, useEffect } from "react"
import movieUtils from "../../utils/movies";
import { Container, Button, Image, Card, Row, Col, Modal, Form } from 'react-bootstrap';
import image1 from './../img/review2.png';
import './DiscussionPage.css';

const ReviewAddPage = () => {

	const [stage, setStage] = useState(0);

	const [films, setFilms] = useState([]);

	const [film, setFilm] = useState({ title: "Detective Pikachu", _id: "123123123" });

	const [rating, setRating] = useState(-1);

	const [msg, setMsg] = useState("");

	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	useEffect(() => {
		movieUtils.getAll().then((resp) => {
			setFilms(resp.data);
		})
	}, []);


	const selectFilm = (e, film) => {
		e.preventDefault();

		setFilm(film);
		setStage(1);
	}


	const msgUpdate = (e, str) => {
		e.preventDefault();

		if (str.length > 300) {
			setMsg(msg);
			return;
		}

		setMsg(str);
	};


	const submit = (e) => {
		e.preventDefault();
		handleShow();

		// check if the film is valid

		if (rating < 1) {
			// enter a valid raiting
			return
		}
		if (msg.length === 0) {
			// add a valid review
			return
		}



		const reviewData = {
			rating: rating,
			name: name,
			email: email,
			msg: msg,
			filmID: film._id,
		}

		movieUtils.createRating(reviewData).then(() => {
			setStage(3);
		}).catch((err) => {
			// Put this in an alert of something
			setStage(1);
		});
		setStage(2);
	};

	if (stage === 0) {
		return (<div className="background">
			<Image src={image1} alt="Select Banner" width="100%" fluid />
			<Container>
				<br />

				<h1 id="revh1" style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}> Select a film to add a review</h1>

				<div id="revcarddiv" style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto" }}>
					<br />
					<Row md={4}>

						{films.map((resp) => (
							<Col xs={4}>
								<div class="text-center">
									<Card style={{ width: '18rem' }} >
										<Card.Img variant="top" src={resp.image} height="452px" />
										<Card.Body>
											<Card.Title>{resp.title}</Card.Title>
											<Button onClick={(e) => { selectFilm(e, resp) }}>
												Review
											</Button>
										</Card.Body>
									</Card><br /><br />
								</div>
							</Col>

						))}
					</Row>
				</div>
			</Container>
		</div >
		);

	} else if (stage === 1) {


		const ratings = []

		for (let i = 1; i < 6; i++) {
			ratings.push(<button onClick={(event) => {
				event.preventDefault();
				setRating(i);
			}
			}>{(rating === i) ? "Selected" : i}</button>)
		}

		return (
			<div className="background">
				<Container id="revcont"><br />
					<Form action="" className="text-center">
						<fieldset>
							<legend style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Details</legend>
							<input value={name} type="text" placeholder="Name" onChange={(e) => { e.preventDefault(); setName(e.target.value); }} />
							<input value={email} type="email" placeholder="Email Address" required onChange={(e) => { e.preventDefault(); setEmail(e.target.value) }} />
						</fieldset><br />

						<h4 className="text-center" style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>
							How many ratings do you want to give {film.title}?
						</h4>

						{ratings}

						<br />

						<textarea value={msg} name="" id="" cols="48" rows="10" onChange={(e) => { msgUpdate(e, e.target.value) }}  ></textarea>

						<p>
							{msg.length} / 300
						</p>
						<Button onClick={submit}> Add Review</Button>
						<br /><br />
					</Form>
				</Container>
			</div >
		);
	}
	else if (stage === 2) {
		return (<div className="background">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>System Message</Modal.Title>
				</Modal.Header>
				<Modal.Body>Your request is processing...</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose} href="/discussionboard">
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>)
	}
	else if (stage === 3) {
		return (<div className="background">

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>System Message</Modal.Title>
				</Modal.Header>
				<Modal.Body>Review added successfully!</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose} href="/discussionboard">
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>)
	}


	return (<div>
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
	</div>);
}

export default ReviewAddPage;