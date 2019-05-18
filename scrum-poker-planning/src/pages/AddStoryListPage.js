import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import Input from "../components/Input";
import Link from "react-router-dom/es/Link";
import Redirect from "react-router/es/Redirect";

class AddStoryListPage extends Component {
state ={
    sessionName:'',
    numberOfVoters:0,
    textAreaVal:'',
    redirect: false
};
    startSession = () => {

        if(this.state.numberOfVoters !== '0' && this.state.sessionName !== '' && this.state.textAreaVal !== '') {
            debugger;
            const req = {
                'sName': this.state.sessionName,
                'numberOfVoters': this.state.numberOfVoters,
                'stories': this.prepareStories()
            };
            // session baslatılacak.
            // bilgiler gönderilecek.
            console.log('startSesssion');
            this.setState({redirect: true});
        }
    };

    prepareStories = () => {
        const data = this.state.textAreaVal.split('\n').filter((a)=>{return a !== ''});
        return data;
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
                    <Input inputType='text' labelText='Session Name' getDataFromInput={this.handleSessionName}/>
                    <Input inputType='number' labelText='Number of Voters' getDataFromInput={this.handleNumberOfVoters}/>
                    <p>Paste your story list (each line will be converted as a story)</p>
                    <textarea name="stories" cols="60" rows="20" onChange={this.handleTextareaChange}/>
                    <div onClick={this.startSession}>Start Session</div>
                </div>
                {this.state.redirect && <Redirect push to="/scrum-master-planning" />}
            </BaseContainer>

        )
    }
}

export default AddStoryListPage;