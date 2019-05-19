import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";

const storyListData = [{
    'name': 'Story1',
    'point': '5',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story2',
    'point': '124',
    'status': 'voted'
}, {
    'name': 'Story3',
    'point': '',
    'status': 'Active'
}, {
    'name': 'Story4',
    'point': '',
    'status': 'Not Voted'
}, {
    'name': 'Story5',
    'point': '',
    'status': 'Not Voted'
}];


class DeveloperPlanningPage extends Component {

    componentDidMount() {
        const sprintData =  this.getSprintDataFromDb();
        const storyData =  this.getStoryDataFromDb();
        const voterData =  this.getVoterDataFromDb();

        debugger;
    }


    getSprintDataFromDb = () => {
        fetch("http://localhost:3001/api/getSprintData")
            .then(data => data.json())
            .then(res => this.setState({data: res.data}));
    };

    getStoryDataFromDb = () => {
        fetch("http://localhost:3001/api/getStoryData")
            .then(data => data.json())
            .then(res => this.setState({data: res.data}));
    };

    getVoterDataFromDb = () => {
        fetch("http://localhost:3001/api/getVoterData")
            .then(data => data.json())
            .then(res => this.setState({data: res.data}));
    };

    getCurrentStoryName = () => {
        return 'ExampleStory'
    };

    sendMyPoint = (point) => {
        console.log(point);
    };

    render() {
        return (
            <BaseContainer>
                <div className="DeveloperPlanningPage">
                    <StoryList storyList={storyListData}/>
                    <ActiveStory sendPoint={this.sendMyPoint} storyName={this.getCurrentStoryName()}/>
                </div>
            </BaseContainer>
        )
    }
}

export default DeveloperPlanningPage;