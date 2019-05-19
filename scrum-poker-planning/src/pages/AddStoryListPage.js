import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import Input from "../components/Input";
import Redirect from "react-router/es/Redirect";
import axios from 'axios';


class AddStoryListPage extends Component {
    state = {
        sessionName: '',
        numberOfVoters: 0,
        textAreaVal: '',
        redirect: false,
        sprintId:0,
        storyId:0,
        currentStoryId:0,

        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => this.setState({data: res.data}));
    };

    putDataToDB = message => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("http://localhost:3001/api/putData", {
            id: idToBeAdded,
            message: message
        });
    };

    createSessionReq = (name) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }
        this.setState(
            {
                sprintId: idToBeAdded
            }
        );
        axios.post("http://localhost:3001/api/CreateSession", {
            id: idToBeAdded,
            sprintName: name
        }).then(resp => {
            const votersReq  = this.prepareVotersData();
            this.createVotersReq(votersReq[0].score);

            const storyReq = this.prepareStories();
            this.createStoryReq(storyReq[0],13);
            debugger;
            this.setState({redirect: true});
        });
    };

    createStoryReq = (dt) => {

        axios.post("http://localhost:3001/api/CreateStories", {
            id: 12,
            storyName: dt.storyName,
            status: dt.status,
            finalScore: dt.finalScore,
            sprintId: dt.sprintId
        });
    };

    createVotersReq = (message) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("http://localhost:3001/api/CreateVoters", {
            id: idToBeAdded,
            message: message
        });
    };

    deleteFromDB = idToDelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id === idToDelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
                id: objIdToDelete
            }
        });
    };

    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
            if (dat.id === idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post("http://localhost:3001/api/updateData", {
            id: objIdToUpdate,
            update: {message: updateToApply}
        });
    };

    startSession = () => {
        if (this.state.numberOfVoters !== '0' && this.state.sessionName !== '' && this.state.textAreaVal !== '') {
            // session baslatılacak.
            // bilgiler gönderilecek.
            console.log('startSesssion');

            this.createSessionReq(this.state.sessionName);
        }
    };
    prepareVotersData = () => {
        let votersData=[];
        for(let i = 0; i<this.state.numberOfVoters; i++) {
            votersData.push({voterId:i,score:'0'})
        }
        debugger;
        return votersData;
    };
    prepareStories = () => {
        const data = this.state.textAreaVal.split('\n').filter((a) => {
            return a !== ''
        });
        return data.map(st => {
            return {
                storyName: st,
                status: 'Not Voted',
                finalScore: '0',
                sprintId: this.state.sprintId
            }
        });
    };

    handleTextareaChange = (e) => {
        const data = e.target.value;
        this.setState({
            textAreaVal: data
        });
    };

    handleSessionName = (data) => {
        this.setState({
            sessionName: data
        });
    };

    handleNumberOfVoters = (data) => {
        this.setState({
            numberOfVoters: data
        });
    };

    render() {
        return (
            <BaseContainer>
                <div className="AddStoryListPage">
                    <div className="InputBlock">

                        <Input inputType='text' labelText='Session Name' getDataFromInput={this.handleSessionName}/>
                        <Input inputType='number' labelText='Number of Voters'
                               getDataFromInput={this.handleNumberOfVoters}/>
                    </div>
                    <p>Paste your story list (each line will be converted as a story)</p>
                    <textarea name="stories" cols="60" rows="20" onChange={this.handleTextareaChange}/>
                    <div className="StartSessionButton" onClick={this.startSession}>
                        <p>Start Session</p>
                    </div>
                </div>
                {this.state.redirect && <Redirect push to="/scrum-master-planning"/>}
            </BaseContainer>

        )
    }
}

export default AddStoryListPage;