import axios from "axios";

const url = "http://5.226.143.166:3000"

const paymentSecret = (price) =>{
	return new Promise( (callback, errorCallback) => {
		axios.post(url+"/stripe/request", {amount: price*100}).then( (resp)=> {
			callback(resp);
		}).catch( (err) => {
			errorCallback(err);
		});
	})
}


const paymentObj = {createPaymentSecret: paymentSecret}

export default paymentObj;