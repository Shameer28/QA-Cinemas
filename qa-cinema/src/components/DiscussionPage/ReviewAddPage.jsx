
import { Button } from "bootstrap";
import {useState, useEffect} from "react"
import movieUtils from "../../utils/movies";

const ReviewAddPage = () => {

	const [stage, setStage] = useState(0);

	const [films, setFilms] = useState([]);

	const [film, setFilm] = useState({ title: "Detective Pikachu", _id: "123123123" });

	const [rating, setRating] = useState(-1);

	const [msg, setMsg] = useState("");

	const [name, setName] = useState("");

	const [email, setEmail] = useState("");


	useEffect( ()=> {
		movieUtils.getAll().then( (resp) => {
			setFilms(resp.data);
		})
	}, []);


	const selectFilm = (e, film) => {
		e.preventDefault();

		setFilm(film);
		setStage(1);
	}


	const msgUpdate = (e, str)=> {
		e.preventDefault();

		if (str.length > 300) {
			setMsg(msg);
			return;
		}

		setMsg(str);
	};


	const submit = (e)=> {
		e.preventDefault();

		// check if the film is valid

		if (rating < 1) {
			// enter a valid raiting
			return
		}
		if (msg.length == 0) {
			// add a valid review
			return
		}




		const reviewData = {
			rating: rating,
			name: name,
			email: email,
			msg: msg,
			filmId: film._id,
		}

		movieUtils.createRating(reviewData).then( () => {
			setStage(3);
		}).catch( (err) => {
			// Put this in an alert of something
			setStage(1);
		});
		setStage(2);
	};

	if (stage === 0) {
		return ( <div>
			<h4> Select a film to add a review</h4>

			<div>
				{ films.map(  (resp) => (
					<button onClick = {  (e) => {  selectFilm(e, resp) } }>
						{resp.title}
					</button>
				)) }
			</div>


		</div>
		);

	}else if (stage == 1) {


		const ratings = []

		for (let i = 1; i<6; i++) {
			ratings.push(<button onClick={ (event)=> {
				event.preventDefault();
				setRating(i);
			}
			 }>{  (rating === i) ? "Selected" : i}</button>)
		}

		return(
			<div>

				<form action="">
					<fieldset>
						<legend>Details</legend>
						<input value={name} type="text" placeholder="Name" onChange={ (e) => { e.preventDefault(); setName(e.target.value); } } />
						<input value={email} type="email" placeholder="Email Address" required onChange={ (e) => { e.preventDefault(); setEmail(e.target.value) } } />
					</fieldset>

					<h4>
						How many ratings do you want to give {film.title}?
					</h4>

					{ratings}

					<br/>
				
					<textarea value={msg} name="" id="" cols="30" rows="10" onChange={  (e)=> { msgUpdate(e, e.target.value )} }  ></textarea>
					
					<p>
						{msg.length} / 300
					</p>
					<br/>
					<button onClick= {submit}> Add Review</button>
				</form>
			</div>
		);
	}
	else if (stage == 2) {
		return ( <div>
			<p>
				Waiting ...
			</p>
		</div>)
	}
	else if (stage == 3) {
		return ( <div>
			<p>
				Rating added succesfully
			</p>
		</div>)
	}


	return ( <div>
		<p>
			Looks like something went wrong, Please refresh the page
		</p>	
	</div>);
}
 
export default ReviewAddPage;