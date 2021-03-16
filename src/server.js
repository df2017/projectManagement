const express = require("express");
const app = express();
const port = 8080;

app.use(express.static('./dist/projectManagement'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/projectManagement/'});
});

app.listen(process.env.PORT || port);
