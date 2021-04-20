# Social Fitness


## Group Member Names
-   Glorian Kosi (gk349@njit.edu)
-   Gabin Ntankeu (gnn3@njit.edu)
-   Chirag Patel (cyp5@njit.edu)
-   Hemanth Velan (hv72@njit.edu)
-   
## Heroku App
[Social Fitness](https://project-3-njit.herokuapp.com/)

## Description
We aim to deliver a real-time fitness app accessible from the browser. This web app provides a secure Google login that allows users to identify themselves, and users will be able to search for workouts, nutrition information of a particular ingredient healthy meals and even log their current fitness progress.

## Features
1. **Profile Tab:** The profile tab allows user to store their current age, weight, height and gender in their profile and also make changes to it if necessary.
2. **Social Media Tab:** The social media tab allows users to create text-based post and share it with others who joins it. Users can share their personal thoughts, workout routines, personal favorite recipes and also will be able to comment on each other's post.
3. **Food Search Tab:** The food search tab allows users to search for a ingredient. Once a ingredient is searched it will show the nutrition values of that ingredient and also display healthy recipes related to the ingredient searched. This tab also allows user to favorite
their recipe searched for future use.
4. **Workout Search Tab:** The workout search tab allows users to search for a workout. Once a workout is searched it will show different exercise related to that workout and also has the to option to favorite that workout for future use.

## Installation

1. `npm install`
2. `pip install -r requirements.txt`
3. `pip install python-dotenv`
4. `npm install react react-dom`
5. `npm install react-google-login`

## Setup

1. Run `echo "DANGEROUSLY_DISABLE_HOST_CHECK=true" > .env.development.local` in the project directory

## Adding Google Login to your App
Steps:
1. We need to create an application in the Google developer console. It provides `clientId` is used to identify your application for authentication details. Follow the below steps to get the client ID.
2. Go to the [Credentials Page](https://console.cloud.google.com/projectselector2/apis/credentials?pli=1&supportedpurview=project) ( if you are new, then  [create a project](https://console.developers.google.com/projectcreate)  and follow these steps).
3. Click **Create credentials > OAuth client ID**.
4. Select the **Web application** type.
5.  Name your OAuth 2.0 client and click **Create**

## Databases setup

1. Install PostGreSQL: `sudo yum install postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs` Enter yes to all prompts.
2. Initialize PSQL database: `sudo service postgresql initdb`
3. Start PSQL: `sudo service postgresql start`
4. Make a new superuser: `sudo -u postgres createuser --superuser $USER` **If you get an error saying "could not change directory", that's okay! It worked!**
5. Make a new database: `sudo -u postgres createdb $USER` **If you get an error saying "could not change directory", that's okay! It worked!**
6. Make sure your user shows up:

- a) `psql`
- b) `\du` look for ec2-user as a user
- c) `\l` look for ec2-user as a database

7. Make a new user:

- a) `psql` (if you already quit out of psql)
- b) Type this with your username and password (DONT JUST COPY PASTE): `create user some_username_here superuser password 'some_unique_new_password_here';` e.g. `create user namanaman superuser password 'mysecretpassword123';`
- c) \q to quit out of sql

8. Save your username and password in a `sql.env` file with the format `SQL_USER=` and `SQL_PASSWORD=`.

### Create a new database on Heroku and connect to the code

1. In your terminal, go to the directory with `app.py`
2. Now set up a new remote Postgres database with Heroku and connect to it locally.
3. Login and fill creds: `heroku login -i`
4. Create a new Heroku app: `heroku create`
5. Create a new remote DB on your Heroku app: `heroku addons:create heroku-postgresql:hobby-dev` (If that doesn't work, add a `-a {your-app-name}` to the end of the command, no braces)
6. See the config vars set by Heroku for you: `heroku config`. Copy paste the value for DATABASE_URL.
7. Create .env file in your directory. Add value of `DATABASE_URL` by entering this in the .env file: `export DATABASE_URL='copy-paste-value-in-here'`

## Run Application

1. Run command in terminal (in your project directory): `python app.py`
2. Run command in another terminal, `cd` into the project directory, and run `npm run start`
3. Preview web page in browser '/'

## Deploy to Heroku

1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
