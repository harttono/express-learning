const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routing/routes/router');
app.use(bodyParser.json());
const port = 5000;
app.use('/api/v1',router)

app.listen(port,() => console.log(`port ${port} is listening.`))

