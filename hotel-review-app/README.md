# PremierInn Review App

The review app allows the user to view reviews for selected hotels from list presented in the dropdown.

# Backgroung Info 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
We are using react-bootstrap-table-next for table view
JS in CSS (JSS) is used for the styling as this let's us keep the styling inline

### Prerequisites
We need the following installed to run the app
We use the npm command to install yarn globally

Node and npm can be installed from th following link.

[Node](https://node.org/en)

We should be able to run the following command from a cmd prompt after having installed Node.

`npm -v`

**Yarn**

yarn is a package manager for our code.It allows to use and share code. The code is shared through pacages. A package contains all the code being shared as well as package.json which describes the package.

We are using yarn instead of npm.

[Yarn installation link](https://classic.yarnpkg.com/en/docs/install)

After installation we should be able to run

`yarn -v`

in CLI


### Installing

After installing all prerequisities

To get the local environment up and running, following are the steps to be followed

* Pull the repository
* Run `yarn install` from folder that contains package.json
* Run `yarn start` to run the app
* Run `yarn build` to get the prod build


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Coding style tests

To apply prettier please run `yarn prettier --write`