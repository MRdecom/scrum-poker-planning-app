import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";

class DeveloperPlanningPage extends Component {
    render() {
        return (
            <BaseContainer>
                <div className="DeveloperPlanningPage">
                    <StoryList/>
                    <ActiveStory/>
                </div>
            </BaseContainer>
        )
    }
}

export default DeveloperPlanningPage;