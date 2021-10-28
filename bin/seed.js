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
        mood: ["creative"],
        energyLvl: 2,
        title: 'Pictionary',
        description: 'Go to skribbl.io and play a few rounds. You can play with your friends or with strangers.',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["restless"],
        energyLvl: 5,
        title: 'Do a Kata',
        description: 'This is a demanding activity! Make sure you have time for a break afterwards. If you are full of energy you can put bread on the board and go for it!' ,
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["angry"],
        energyLvl: 3,
        title: 'Take a walk',
        description: 'Run forest! Run!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["happy"],
        energyLvl: 4,
        title: 'Code some',
        description: 'Make the app of year! You have it in you!!!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["procrastinating"],
        energyLvl: 1,
        title: 'Take a self-guided lab',
        description: 'Fight it! You are stronger then your evil brother living in you!! Go forth and blossom little Ironhacker!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["sad",],
        energyLvl: 0,
        title: '5min break!',
        description: 'What are you still doing here? Go sleep b***.',
    },






    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["creative", "procrastinating"],
        energyLvl: 3,
        title: 'Painting',
        description: 'Take a walk, let the nature inspire you. Come back and draw with yur eyes closed what ever comes into your mind. - Do not forget to put paper underneath as you will not be able to see if you are using the table as canvas already.',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["happy", "procrastinating"],
        energyLvl: 3,
        title: 'Stuff quiz',
        description: 'Stuff publishes daily quizzes which you can access online for free on the Stuff website. There’s a morning and afternoon quiz for the adults, and a daily kids’ quiz for the littles',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["angry", "restless"],
        energyLvl: 5,
        title: 'Boxclub',
        description: 'Before th rage eats you up, eat up the rage. Go create a box club! First rule of the box club? Do not speak abut the box club!',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: ["procrastinating", "angry"],
        energyLvl: 2,
        title: 'Online puzzle',
        description: 'You can find countless online puzzles on the Lovatts website. Enjoy daily crosswords, Sudoku, Word Search, Trivia Quizzes, Code Crackers and more, all for free.',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 1,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 2,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 5,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 0,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 0,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 2,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 1,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 1,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 2,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 0,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 5,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 5,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 1,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 0,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 2,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 3,
        title: '',
        description: '',
    },
        {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 2,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },
    {
        author: '617aee233bae35b1f7b58d21',
        mood: [""],
        energyLvl: 4,
        title: '',
        description: '',
    },

]

Activity.create(activities)
    .then(activitiesFromDB => {
        console.log(`Created ${activitiesFromDB.length} activities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating activities from the DB: ${err}`));
