const mongoose = require('mongoose');
const Activity = require('../models/Activity.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/moodshaker';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const activities = [
    {
        author: '6179767970d975c47900cc08',
        mood: ["creative"],
        energyLvl: 2,
        title: 'Pictionary',
        description: 'Go to skribbl.io and play a few rounds. You can play with your friends or with strangers.',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["restless"],
        energyLvl: 5,
        title: 'Do a Kata',
        description: 'This is a demanding activity! Make sure you have time for a break afterwards. If you are full of energy you can put bread on the board and go for it!' ,
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["angry"],
        energyLvl: 3,
        title: 'Take a walk',
        description: 'Run forest! Run!',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["happy"],
        energyLvl: 4,
        title: 'Code some',
        description: 'Make the app of year! You have it in you!!!',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["procrastinating"],
        energyLvl: 1,
        title: 'Take a self-guided lab',
        description: 'Fight it! You are stronger then your evil brother living in you!! Go forth and blossom little Ironhacker!',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["sad",],
        energyLvl: 0,
        title: '5min break!',
        description: 'What are you still doing here? Go sleep b***.',
    },






    {
        author: '6179767970d975c47900cc08',
        mood: ["creative", "procrastinating"],
        energyLvl: 3,
        title: 'Painting',
        description: 'Take a walk, let the nature inspire you. Come back and draw with yur eyes closed what ever comes into your mind. - Do not forget to put paper underneath as you will not be able to see if you are using the table as canvas already.',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["happy", "procrastinating"],
        energyLvl: 3,
        title: 'Stuff quiz',
        description: 'Stuff publishes daily quizzes which you can access online for free on the Stuff website. There’s a morning and afternoon quiz for the adults, and a daily kids’ quiz for the littles',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["angry", "restless"],
        energyLvl: 5,
        title: 'Boxclub',
        description: 'Before th rage eats you up, eat up the rage. Go create a box club! First rule of the box club? Do not speak abut the box club!',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["procrastinating", "angry"],
        energyLvl: 2,
        title: 'Online puzzle',
        description: 'You can find countless online puzzles on the Lovatts website. Enjoy daily crosswords, Sudoku, Word Search, Trivia Quizzes, Code Crackers and more, all for free.',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["angry", "sad", "procrastinating"],
        energyLvl: 0,
        title: 'Sleep',
        description: 'Sometime the best answers will come in your sleep. Sometimes anger goes away, take by our dreams. Have a nap, have a long sleep in - however, rest your head.',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["happy", "procrastinating", "restless", "sad", "creative", "angry"],
        energyLvl: 0,
        title: 'Be yourself',
        description: 'No matter what, in life the most important thing, is that you just be. Be yourself. If you are angry, sad, lazy - just be yourself, that is your best version. :)',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["sad", "procrastinating", "restless", "creative"],
        energyLvl: 0,
        title: 'Bird watching',
        description: 'Sometimes, looking up in the sky or in the trees helps us ease our minds. Try it out, go into the woods or out in a field and see how many different birds there are.',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["angry", "sad", "restless"],
        energyLvl: 4,
        title: 'Scream!',
        description: 'Simple. Go outside. Far away - far, far away - and scream. Scream as loud as you can, as long as you can. Scream everything out of you.',
    },
        {
            author: '6179767970d975c47900cc08',
        mood: ["sad", "creative", "procrastinating"],
        energyLvl: 2,
        title: 'Go to a vintage shop',
        description: 'In every city there are vintage shops. Have a look around, get yourself a nice coffee and put on some vintage clothes. It is fun!',
    },
    {
        author: '6179767970d975c47900cc08',
        mood: ["happy", "restless", "sad", "angry"],
        energyLvl: 4,
        title: 'Dance',
        description: 'The app Meetup is a great place to find groups of people with same interests. Go there and have a look for a dancing group nearby - I am sure there will be!! Dancing is way more physical than most people think. You will be surprised how good it is to let all your energy out and find inner rest. It also helps you express yourself and enhance feelings in within yourself.',
    },

]

Activity.create(activities)
    .then(activitiesFromDB => {
        console.log(`Created ${activitiesFromDB.length} activities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating activities from the DB: ${err}`));
