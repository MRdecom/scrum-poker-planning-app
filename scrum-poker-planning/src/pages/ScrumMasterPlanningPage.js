import React, {Component} from 'react';
import "../style.css";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";
import ScrumMasterPanel from "../components/ScrumMasterPanel";
import BaseContainer from "../components/BaseContainer";

class ScrumMasterPlanningPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        voteEnded: false,
        sprintData: undefined,
        storyData: undefined,
        voterData: undefined
    };

    componentDidMount() {
        // getCurrentStoryInfo
        // getStoryList() her 2 sn de bir güncellenecek.
        // getVoterInfoList
        // TODO: this.setActiveStory(id);
        this.getSprintDataFromDb();
        this.getStoryDataFromDb();
        this.getVoterDataFromDb();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.props.votedEnded bilgisi alınacak ve buna göre ScrumMasterPanel güncellenecek.
        // updateVoterInfoList
        if (prevState.voterData !== this.state.voterData) {
            console.log(this.state.voterData);
        }

        if (prevState.sprintData !== this.state.sprintData) {
            console.log(this.state.sprintData);
        }

        if (prevState.storyData !== this.state.storyData) {
            console.log(this.state.storyData);
        }
    }

    getSprintDataFromDb = () => {
        fetch("http://localhost:3001/api/getSprintData")
            .then(data => data.json())
            .then(res => {
                    this.setState({
                        sprintData: {id: res.data[0].id, sprintName: res.data[0].sprintName}
                    })
                }
            );
    };

    getStoryDataFromDb = () => {
        fetch("http://localhost:3001/api/getStoryData")
            .then(data => data.json())
            .then(res => {
                    this.setState({
                        storyData: res.data.sort((a, b) => {
                            return a.id - b.id;
                        })
                            .map(item => {
                                return {
                                    id: item.id,
                                    sprintId: item.sprintId,
                                    storyName: item.storyName,
                                    status: item.status,
                                    finalScore: item.finalScore
                                }
                            })
                    })
                }
            );
    };

    getVoterDataFromDb = () => {
        fetch("http://localhost:3001/api/getVoterData")
            .then(data => data.json())
            .then(res => this.setState(
                {
                    voterData: res.data.sort((a, b) => {
                        return a.id - b.id;
                    })
                        .map(item => {
                            return {
                                id: item.id,
                                score: item.score
                            }
                        })
                })
            );
    };

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
        if(!this.state.storyData) return '';
        return this.state.storyData.find((elm) => { return elm.status === 'Active'}).storyName;
    };

    render() {
        return (
            <BaseContainer>
                <div className="ScrumMasterPlanningPage">
                    <StoryList storyList={this.state.storyData}/>
                    <ActiveStory storyName={this.getCurrentStoryName()} sendPoint={this.sendMyPoint}/>
                    <ScrumMasterPanel storyName={this.getCurrentStoryName()} voterInfo={this.state.voterData}
                                      voteEnded={this.state.voteEnded} endVoting={this.endVoting}/>
                </div>
            </BaseContainer>
        )
    }
}

export default ScrumMasterPlanningPage;