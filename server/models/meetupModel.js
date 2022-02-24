// external import
const mongoose = require('mongoose');

const meetupSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const MeetupModel = mongoose.model('Meetup', meetupSchema);

module.exports = MeetupModel;
