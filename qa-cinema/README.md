# Cinema Project - Front-End

This is the front-end of of Group 2's Website. The front-end uses javascript as well as css and html. This website is built on the react framework using jest for testing and node for then runtime environment.

We are currently running the front-end on GCP (Using the free credits provided), And the website communicates with a private server running the back-end/api.

## Requirements

In order for the front-end to work, you need:
 - An accessible API. The back-end must be running, The current code is set to communicate with the back-end currently deployed. The /Utils Folder holds all the scripts that handle axios and back-end communication. *Change the url variable to set a new api ip*
 - node.js. Node is used as the runtime environment. *Latest Version is recommended*
 - NPM. The node package manager was used during development to handle the package.json and all project requirements. *Corrosponding version with node*
 - Google Map's API Key. The Directions page uses a google maps embed that requires an API key. The key is storged in an ignored api.json file at the root of the front-end. *Add your own on clone*
 - Publishable Stripe Key. In the payment manager the public stripe key is set. *Change StripeKey Var to update stripe*

## Executing the Project

In a terminal is the front end directory, you can run:

### Update: `npm i`

This command uses node package manager to update or download all the packages listed in package.json. NPM creates the package.json when the project was created and updates it automatically after a new requirement is installed manually 

### Run: `npm start`

Runs the app in the development mode. In development mode the page will reload on a file-change and reflect and new changes or errors. 

### `npm test -- --watchAll`

Checks all sub-folder for tests before executing them. The `--coverage` flag can be added to test for coverage during testing. *testing is handled by jest*

##  Authors

#### Shameer Dar - Front-End & Project Owner
#### Harris Moghal - Front-End
#### Oliver - Back-End & Scrum Master
#### Andrew McCall - Back-end
