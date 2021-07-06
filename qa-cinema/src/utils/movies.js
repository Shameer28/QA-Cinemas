
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

const get = (id, callback, errorCallback) => {
	axios.get(url + "/movies/get/" + encodeURIComponent(id)).then( (resp) => {
		callback(resp);
	}).catch( (err) => {
		errorCallback(err);
	});
}

export default {
	getAll: getAll,
	get: get,
}
