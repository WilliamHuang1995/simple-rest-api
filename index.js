const express = require('express');
const bodyParser = require('body-parser');
// initiate express server
const app = express();
app.use(bodyParser.json());

// In each HTTP request, you have access to the request + response object
app.get('/', function(req, res) {
  res.send('Hello World!');
});
// Respond to POST request on the root route (/), the application’s home page:

app.post('/', function(req, res) {
  res.send('Got a POST request');
});
// Respond to a PUT request to the /user route:

app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user');
});

// Respond to a DELETE request to the /user route:
app.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(8000, () => {
  console.log('Server started listening on port 8000');
});
