const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { admin } = require('./middlewares/authentication');
const { PORT } = process.env;

// init
const app = express();

// settings
app.set('port', PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
require('./middlewares/passport');

// routes
app.use('/auth', require('./routes/auth'));
app.use('/user', admin, require('./routes/user'));
app.use('/upload', require('./routes/upload'));
app.use('/category', require('./routes/category'));
app.use('/product', require('./routes/product'));

module.exports = app;