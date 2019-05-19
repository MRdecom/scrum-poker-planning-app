const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');


const SprintData = require('./sprint-data');
const StoriesData = require('./stories-data');
const VotersData = require('./voters-data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = 'mongodb+srv://admin:admin123@star-wars-quotes-ktour.mongodb.net/scrum-poker?retryWrites=true';

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    {useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});
router.get("/getSprintData", (req, res) => {
    SprintData.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});
router.get("/getStoryData", (req, res) => {
    StoriesData.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});
router.get("/getVoterData", (req, res) => {
    VotersData.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});




// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate({id: id},{$set:{message:update}}, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


router.post("/StoryActivateById", (req, res) => {
    const {id, status} = req.body;
    console.log('StoryActivateById');
    StoriesData.findOneAndUpdate({id: id},{status:status}, err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});


router.post("/SendFinalScore", (req, res) => {
    console.log('SendFinalScore');
    const {id, finalScore} = req.body;
    StoriesData.findOneAndUpdate({id: id},{$set:{finalScore:finalScore}}, err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

router.post("/UpdateToVotedStory", (req, res) => {
    console.log('UpdateToVotedStory');
    const {id, status} = req.body;
    StoriesData.findOneAndUpdate({id: id},{$set:{status:status}}, err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});


// {id: id},{$set:{message:update}}






// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
    Data.remove( err => {
        if (err) return res.send(err);
        return res.json({success: true});
    });
});
router.delete("/DeleteSprintData", (req, res) => {
    SprintData.remove( err => {
        if (err) return res.send(err);
        return res.json({success: true});
    });
});
router.delete("/DeleteStoryData", (req, res) => {
    StoriesData.remove( err => {
        if (err) return res.send(err);
        return res.json({success: true});
    });
});
router.delete("/DeleteVotersData", (req, res) => {
    VotersData.remove( err => {
        if (err) return res.send(err);
        return res.json({success: true});
    });
});


// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
    let data = new Data();

    const {id, message} = req.body;

    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});
router.post("/CreateSession", (req, res) => {
    let data = new SprintData();

    const {id, sprintName} = req.body;

    if ((!id && id !== 0) || !sprintName) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.sprintName = sprintName;
    data.id = id;
    data.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});
router.post("/CreateStories", (req, res) => {
    let data = new StoriesData();

    const {id, storyName, status, finalScore, sprintId} = req.body;
    if ((!id && id !== 0)) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    data.id = id;
    data.sprintId = sprintId;
    data.storyName = storyName;
    data.status = status;
    data.finalScore = finalScore;

    data.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});
router.post("/CreateVoters", (req, res) => {
    let data = new VotersData();

    const {id, score} = req.body;

    if ((!id && id !== 0) || !score) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.score = score;
    data.id = id;
    data.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));