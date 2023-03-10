# Integration project with API [freetogames](https://www.freetogame.com/api-doc)

This project integrates with the aforementioned API to present a list of games on the screen, with search features by keyword, sorting by publication data or by game name, details of the selected game and favorite the game to be sent by email. (still in development).

## Available script

In the project directory, run
### `npm i`

to install the dependencies. After that, run

### `npm start`

to launch the application in development mode.\
The address [http://localhost:3005](http://localhost:3005) will be opened on the brower.

In the `backend` directory, run
### `npm i`

to install the dependencies. After that, run

### `npm start`

that will lauch the application server to send email. Right now this feature is rudimentary and just sends a standard email to the entered address.      

## Additional features

Among the features that can be implemented and finished are:

1. Send favorite games by email, in html format, with the main fields that identify a game (such as image, title and description)
2. Multiple choice dynamic filters
3. Clean filters
4. Descending sort
5. Modal`s responsiveness
