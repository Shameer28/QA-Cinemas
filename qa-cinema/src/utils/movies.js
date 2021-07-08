
import axios from "axios";

const url = "http://localhost:3000"

const getAll = () => {
	
	return new Promise( (callback, errorCallback) => {
		
		axios.get(url + "/movies/getAll").then( (resp) => {
			callback(resp);
		}).catch( (err) => {
			errorCallback(err);
		});
	});
}

const get = (id) => {
	return new Promise( (callback, errorCallback) => {	
		axios.get(url + "/movies/get/" + encodeURIComponent(id)).then( (resp) => {
			callback(resp);
		}).catch( (err) => {
			errorCallback(err);
		});

	});
}

const getRecentReviews = ()=> {
	return new Promise( (callback, errorCallback) => {
		
		axios.get(url + "/ratings/getAll").then( (resp) => {
			callback(resp);
		}).catch( (err) => {
			errorCallback(err);
		});
	});

}


const createRating = (data) => {
	return new Promise( (callback, errorCallback) => {
		axios.post(url + "/ratings/create", data).then( (resp)=> {
			// tell them they did good

			callback();
			// redirect
		}).catch( (err) => {
			// error
			errorCallback(err);
		});
	})
}


export default {
	getAll: getAll,
	get: get,
	getRecentReviews: getRecentReviews,
	createRating: createRating
}
