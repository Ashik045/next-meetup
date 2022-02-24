// external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// internal import
const meetupRoute = require('./routes/meetupRoute');
const authRoute = require('./routes/authRoute');

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('database connection successfull');
    })
    .catch((err) => {
        console.log(err);
    });

// app routing
app.use('/api', meetupRoute);
app.use('/api/auth', authRoute);

// error handling
app.use((req, res, next) => {
    res.status(404).json({
        error: 'requested url not found!',
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});

// application connection port
app.listen(process.env.APP_CONNECTION_PORT || 4000, () => {
    console.log(`listening on port ${process.env.APP_CONNECTION_PORT}`);
});
