// external import

// internal import
const MeetupModel = require('../models/meetupModel');

const createMeetup = async (req, res) => {
    try {
        const newModel = new MeetupModel(req.body);
        const meetup = await newModel.save();

        res.status(200).json({
            message: meetup,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create meetup!',
        });
    }
};

const getAllMeetup = async (req, res) => {
    try {
        const meetups = await MeetupModel.find();

        res.status(200).json({
            message: meetups,
        });
    } catch (err) {
        res.status(500).json({
            error: 'Can not create meetup!',
        });
    }
};

const getMeetupById = async (req, res) => {
    try {
        const meetups = await MeetupModel.findById(req.params.id);

        res.status(200).json({
            message: meetups,
        });
    } catch (err) {
        res.status(500).json({
            error: 'Can not create meetup!',
        });
    }
};

module.exports = {
    getAllMeetup,
    createMeetup,
    getMeetupById,
};
