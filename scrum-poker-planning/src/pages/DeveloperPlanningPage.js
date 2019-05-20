import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";
import axios from "axios";

class DeveloperPlanningPage extends Component {

    state = {
        sprintData: undefined,
        storyData: undefined,
        voterData: undefined,
        intervalIsSet: false
    };

    componentDidMount() {
        // TODO: this.setActiveStory(id);
        this.getSprintDataFromDb();
        this.getStoryDataFromDb();
        this.getVoterDataFromDb();

        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getStoryDataFromDb, 2000);
            this.setState({ intervalIsSet: interval });
        }

        this.setState({
            activeStoryId: this.getActiveStoryId()
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.props.votedEnded bilgisi alınacak ve buna göre ScrumMasterPanel güncellenecek.
        // updateVoterInfoList
        if (prevState.voterData !== this.state.voterData) {
        }
        if (prevState.sprintData !== this.state.sprintData) {
        }
        if (prevState.activeStoryId !== this.state.activeStoryId) {
        }
    }

    getActiveStoryName = () => {
        if (!this.state.storyData) return '';
        const item = this.state.storyData.find((elm) => {
            return elm.status === 'Active'
        });
        return item ? item.storyName : '';
    };

    getActiveStoryId = () => {
        if (!this.state.storyData) return 0;
        return this.state.storyData.find((elm) => {
            return elm.status === 'Active'
        }).id;
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
                            }),
                            activeStoryId: this.getActiveStoryId()
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
        axios.post("http://localhost:3001/api/SendMyScore", {
            score: point.toString()
        }).then(() => {
            this.getStoryDataFromDb();
        });
    };

    render() {
        return (
            <BaseContainer>
                <div className="DeveloperPlanningPage">
                    <StoryList storyList={this.state.storyData}/>
                    <ActiveStory storyName={this.getActiveStoryName()} sendPoint={this.sendMyPoint}/>
                </div>
            </BaseContainer>
        )
    }
}

export default DeveloperPlanningPage;