import axios from "axios";


const url = "http://localhost:3000/forum/"



const getAll = ()=> {
	return new Promise( (callback, errorCallback) => {
		axios.get(url + "getAll").then( (resp)=> {
			callback(resp.data);
		}).catch( (err)=> {
			errorCallback(err);
		});
	});
}








export default {
	getAll: getAll
}