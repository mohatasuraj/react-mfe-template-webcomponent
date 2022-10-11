const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3101, () =>{
    console.log("App is running at 3101");
});