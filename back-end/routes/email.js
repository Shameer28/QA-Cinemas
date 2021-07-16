const express = require("express");
const nodemailer = require('nodemailer');

const router = express.Router();

const {email, contactEmail} = require("../secret.json")

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: email
});

const sendEmail = (title, body, email) => {
	const mailOptions = {
		from: "noreply@qacinema.com",
		to: email,
		subject: title,
		text: body
	};

	console.log("Sending mail", title, email);

	return new Promise( (callback, errorCallback) => {
		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				errorCallback(error);
			} else {
				callback(info);
			}
		});	
	});
}

router.post("/send", (req, res) => {
	try {
		const data = req.body;

		const email = data.Email;
		const name = data.FirstName + " " +data.LastName;
		const body = data.TextArea;

		if (email === undefined) {
			res.status(500).send("Need email");
			return
		}


		console.log(email, body)
		if (body === undefined) {
			res.status(500).send("Need email");
			return
		}

		sendEmail( name + " contact us message" , body + "\nreply to " + email , contactEmail).then( (resp) => {
			if (resp.information) {
			}
			res.send( {status: "success" });
		}).catch( (e) => {
			res.send( {status: "fail" })	
		});

	} catch(e) {
		console.log(e)
		res.send(500).send(e.message);
	}
});

module.exports = router;
