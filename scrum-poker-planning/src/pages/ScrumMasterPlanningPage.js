import React, {Component} from 'react';
import "../style.css";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";
import ScrumMasterPanel from "../components/ScrumMasterPanel";
import BaseContainer from "../components/BaseContainer";


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

const voterInfoList = [
    {
        'name': 'Serkan',
        'status': 'voted',
        'point': '2'
    }, {
        'name': 'Serkan2',
        'status': 'Not Voted',
        'point': ''
    }, {
        'name': 'Serkan3',
        'status': 'voted',
        'point': '21'
    }, {
        'name': 'Serkan4',
        'status': 'Not Voted',
        'point': ''
    }];


class ScrumMasterPlanningPage extends Component {

    componentDidMount() {
        // getStoryList() her 2 sn de bir güncellenecek.
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.props.votedEnded bilgisi alınacak ve buna göre ScrumMasterPanel güncellenecek.
    }

    sendMyPoint = () => {

    };

    render() {
        return (
            <BaseContainer>
                <div className="ScrumMasterPlanningPage">
                    <StoryList storyList={storyListData}/>
                    <ActiveStory storyName='ExampleStory' sendPoint={this.sendMyPoint}/>
                    <ScrumMasterPanel storyName='ExampleStory' voterInfo={voterInfoList} voteEnded={false}/>
                </div>
            </BaseContainer>
        )
    }
}

export default ScrumMasterPlanningPage;