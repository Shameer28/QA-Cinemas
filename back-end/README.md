# QA Cinema Back end
This is the api for qa cinemas

Prerequisites
```
NPM
Mailserver
```
# How to install
```
npm install
```
This will install dependancies

Then create a secret.js and fill it with this information
```
{
	"pv_stripe_key":"stripe_key",
	"email": {
		"user": "emailOfWebserver",
		"pass": "pass"
	},
	"contactEmail": "emailToSend" 
}
```

# How to run

Deploy it using nodemon to run the application
```
npm run dev
```

Deploy it for production
```
npm run prod
```

# Authors

Oliver
Andrew
