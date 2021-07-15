
import axios from "axios";

const url = "http://5.226.143.166:3000"

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
			callback();
		}).catch( (err) => {
			errorCallback(err);
		});
	})
}

const moviesObj = {
	getAll: getAll,
	get: get,
	getRecentReviews: getRecentReviews,
	createRating: createRating
}

export default moviesObj
