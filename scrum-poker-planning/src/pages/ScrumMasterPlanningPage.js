import React, {Component} from 'react';
import "../style.css";
import StoryList from "../components/StoryList";
import ActiveStory from "../components/ActiveStory";
import ScrumMasterPanel from "../components/ScrumMasterPanel";
import BaseContainer from "../components/BaseContainer";
import axios from "axios";

class ScrumMasterPlanningPage extends Component {
    state = {
        voteEnded: false,
        sprintData: undefined,
        storyData: undefined,
        voterData: undefined,
        activeStoryId: undefined
    };

    async componentDidMount() {
        // getCurrentStoryInfo
        // getStoryList() her 2 sn de bir güncellenecek.
        // getVoterInfoList
        await this.storyActivateById(0);


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
        const _id = this.getActiveStoryId();
        axios.post("http://localhost:3001/api/SendFinalScore", {
            id: _id,
            finalScore: data
        }).then(async () => {
            this.setState({
                voteEnded: true
            });
            const currentId = this.getActiveStoryId();
            await this.updateToVotedStory(currentId);
            await this.storyActivateById(currentId+1);
            await this.getStoryDataFromDb();
        });
    };

    storyActivateById = (idToUpdate) => {
        axios.post("http://localhost:3001/api/StoryActivateById", {
            id: idToUpdate,
            status:'Active'
        }).then(() => {
            this.getStoryDataFromDb();
        });
    };
    updateToVotedStory = (idToUpdate) => {
        axios.post("http://localhost:3001/api/UpdateToVotedStory", {
            id: idToUpdate,
            status: 'Voted'
        }).then(() => {
            this.getStoryDataFromDb();
        });
    };


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

    render() {
        return (
            <BaseContainer>
                <div className="ScrumMasterPlanningPage">
                    <StoryList storyList={this.state.storyData}/>
                    <ActiveStory storyName={this.getActiveStoryName()} sendPoint={this.sendMyPoint}/>
                    <ScrumMasterPanel storyName={this.getActiveStoryName()} voterInfo={this.state.voterData}
                                      voteEnded={this.state.voteEnded} endVoting={this.endVoting}/>
                </div>
            </BaseContainer>
        )
    }
}

export default ScrumMasterPlanningPage;