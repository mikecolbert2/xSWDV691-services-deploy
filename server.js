// Set up
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const db = require('./queries')

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

//CORS configuration
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// root route
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API server' })
  })


// ** TEST **
// Get all 
app.get('/api/items', db.getAllItems)




// ** ADMIN ** //

// get all users
app.get('/api/admin/users', db.getAllUsers)


// Start app and listen on port 8080  
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));