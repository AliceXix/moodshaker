const mongoose = require('mongoose');
const Activity = require('../models/Activity.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/moodshaker';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const activities = [
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "creative",
        energyLvl: 2,
        title: 'Pictionary',
        description: 'Go to skribbl.io and play a few rounds. You can play with your friends or with strangers.',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "restless",
        energyLvl: 5,
        title: 'Do a Kata',
        description: 'This is a demanding activity! Make sure you have time for a break afterwards. If you are full of energy you can put bread on the board and go for it!' ,
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "angry",
        energyLvl: 3,
        title: 'Take a walk',
        description: 'Run forest! Run!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "happy",
        energyLvl: 4,
        title: 'Code some',
        description: 'Make the app of year! You have it in you!!!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "procrastinating",
        energyLvl: 1,
        title: 'Take a self-guided lab',
        description: 'Fight it! You are stronger then your evil brother living in you!! Go forth and blossom little Ironhacker!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: "sad",
        energyLvl: 0,
        title: '5min break!',
        description: 'What are you still doing here? Go sleep b***.',
    },
]

Activity.create(activities)
    .then(activitiesFromDB => {
        console.log(`Created ${activitiesFromDB.length} activities`);

        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating activities from the DB: ${err}`));
