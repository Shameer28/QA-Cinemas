//import Stripe from "stripe";
Stripe = require("stripe");

// import pv_stripe_key from '../secret.json'
const {pv_stripe_key} = require('../secret.json');

const stripe = new Stripe(pv_stripe_key);

const express = require("express");

const router = express.Router();

router.post("/request", async (req, res) => {
	const data = req.body;
	try {
        const { amount } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "gbp"
        });
        res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
}});

module.exports = router;