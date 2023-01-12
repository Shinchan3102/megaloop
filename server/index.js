const express = require('express');
const bodyParser = require('body-parser');
require('./src/mongodb/conn');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./src/router/post'));


app.listen(port, () => {
    console.log(`server is running at the port ${port}`);
})