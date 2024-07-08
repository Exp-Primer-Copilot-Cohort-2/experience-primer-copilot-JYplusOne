//Create web server with express
//Create a route /comments
//When a user visits /comments, send a list of comments (an array of strings) as a JSON response from the server. You can define the array in the route handler function.

//Import express library
const express = require('express');

//Create an express application
const app = express();

//Create a route /comments
app.get('/comments', (req, res) => {
    //Send a list of comments as a JSON response
    res.json([
        "That's a great idea!",
        "I never thought of it that way.",
        "At least you tried..."
    ]);
});

//Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});

//Run the server with node comments.js and visit http://localhost:3000/comments in your browser to see the JSON response.

//Import express library
const express = require('express');