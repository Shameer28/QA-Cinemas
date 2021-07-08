import forumUtils from "../../utils/forumUtils";

const Forum = () => {
	
	const [forums, setForums] = useState([])


	useEffect( ()=> {
		forumUtils.getAll().then( (resp)=> {
			setForums(resp.data);
		}).catch( (err) => {

		});
	}, []);
	
	
	
	
	return ( <div>
		<h4>
			Forum
		</h4>

		{/* fetch all the forums */}

		{ forums.map( (forum)=> (
			<h5> {forum.title} </h5>
		))}
	</div> );
}
 
export default Forum;