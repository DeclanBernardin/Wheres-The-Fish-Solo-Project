# Where The Fish?
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Built With

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Google Maps Api](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Documentation
https://docs.google.com/document/d/1NLEXNF8lthGLw981cXUV9v9e0hFbPrJ4R1QXl-SJFAI/edit

## Completed Features
[X] Fully functional google map
[X] Ability to add a marker to any location on the map
[X] Ability to change the location of that marker if you created it 
[X] Ability to add details to markers you have created
[X] Ability to see details people have added to there spots

## Future Features
[] Ability to add friends based on username 
[] Ability to share those spots with only friends 

## Deployment
There is a live version of this application already on heroku: https://calm-garden-00609.herokuapp.com/

If you want to deploy your own locally run version of this app you will need to get a google maps api key and place it in a .ENV file and assign it the name of REACT_APP_API_KEY.

You then should be able tpo do 'npm run server' and 'npm run client' to get it running on localhost:3000.

Created By,
Declan Bernardin

