// Requiring module
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
// Creating express object
const app = express();

// Defining port number
const PORT = 4000;

// Enable CORS for all routes
app.use(cors());

// Function to serve array of file paths
const publicFolderPath = path.join(__dirname, 'public'); // Replace 'public' with the actual name of your public folder
const files = fs.readdirSync(publicFolderPath);

const fileNames = files.map(file => {
  return path.basename(file);
});

app.get('/names', (req, res) => {
  console.log('the names has been sent');
  res.send(fileNames);
});

// Function to serve all static files
// inside public directory.

app.use('/images', express.static('public'));

app.use(express.static(__dirname + 'public'));
// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});
