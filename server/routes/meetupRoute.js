// external import
const express = require('express');

// internal import
const { getAllMeetup, createMeetup, getMeetupById } = require('../controllers/meetupController');

const router = express.Router();

// create meetup
router.post('/meetup', createMeetup);

// get all meetups
router.get('/meetups', getAllMeetup);

// get a meetup by id
router.get('/meetup/:id', getMeetupById);

module.exports = router;
