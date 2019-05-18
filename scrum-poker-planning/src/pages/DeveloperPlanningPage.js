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