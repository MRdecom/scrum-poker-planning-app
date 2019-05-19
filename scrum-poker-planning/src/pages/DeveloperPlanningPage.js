import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";

class DeveloperPlanningPage extends Component {

    state = {
        sprintData: undefined,
        storyData: undefined,
        voterData: undefined
    };

    componentDidMount() {
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

    getCurrentStoryName = () => {
        if (!this.state.storyData) return '';
        return this.state.storyData.find((elm) => {
            return elm.status === 'Active'
        }).storyName;
    };

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

    render() {
        return (
            <BaseContainer>
                <div className="DeveloperPlanningPage">
                    <StoryList storyList={this.state.storyData}/>
                    <ActiveStory storyName={this.getCurrentStoryName()} sendPoint={this.sendMyPoint}/>
                </div>
            </BaseContainer>
        )
    }
}

export default DeveloperPlanningPage;