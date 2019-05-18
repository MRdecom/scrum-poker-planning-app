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
    constructor(props) {
        super(props);
    }

    state ={
        voteEnded: false
    };

    componentDidMount() {
        // getCurrentStoryInfo
        // getStoryList() her 2 sn de bir güncellenecek.
        // getVoterInfoList
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.props.votedEnded bilgisi alınacak ve buna göre ScrumMasterPanel güncellenecek.
        // updateVoterInfoList
    }

    sendMyPoint = (point) => {
        console.log(point);
    };

    endVoting = (data) => {
        console.log(data);
        this.setState({
            voteEnded: true
        });
        //TODO: Server Connection. send vote info to server.
    };

    getCurrentStoryName = () => {
        return 'ExampleStory'
    };

    render() {
        return (
            <BaseContainer>
                <div className="ScrumMasterPlanningPage">
                    <StoryList storyList={storyListData}/>
                    <ActiveStory storyName={this.getCurrentStoryName()} sendPoint={this.sendMyPoint}/>
                    <ScrumMasterPanel storyName='ExampleStory' voterInfo={voterInfoList} voteEnded={this.state.voteEnded} endVoting={this.endVoting} />
                </div>
            </BaseContainer>
        )
    }
}

export default ScrumMasterPlanningPage;