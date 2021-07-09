import axios from "axios";


const url = "http://localhost:3000/forums/"



const getAll = ()=> {
	return new Promise( (callback, errorCallback) => {
		axios.get(url + "getAll").then( (resp)=> {
			callback(resp);
		}).catch( (err)=> {
			errorCallback(err);
		});
	});
};

const get = (id) => {
	return new Promise( (callback, errorCallback) => {
		axios.get(url + "get/" + id).then( (resp)=> {
			callback(resp);
		}).catch( (err)=> {
			errorCallback(err);
		});
	});
}

const addComment = (id, data) => {
	return new Promise ( (callback, errorCallback) => {
		axios.patch(url +"comment/add/" + id, data).then( resp=> {
			callback(resp);
		}).catch ( (err) => {
			errorCallback(err);	
		});
	})
};





export default {
	getAll: getAll,
	get: get,
	addComment
}