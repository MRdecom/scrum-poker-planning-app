import React, {Component} from 'react';
import "../style.css";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";
import ScrumMasterPanel from "../components/ScrumMasterPanel";
import BaseContainer from "../components/BaseContainer";

class ScrumMasterPlanningPage extends Component {
    render() {
        return (
            <BaseContainer>

                <div className="ScrumMasterPlanningPage">
                    <StoryList/>
                    <ActiveStory storyName='ExampleStory'/>
                    <ScrumMasterPanel storyName='ExampleStory'/>
                </div>
            </BaseContainer>
        )
    }
}

export default ScrumMasterPlanningPage;