import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import Input from "../components/Input";
import Link from "react-router-dom/es/Link";

class AddStoryListPage extends Component {

    startSession = () => {
        // session baslatılacak.
        // bilgiler gönderilecek.
        console.log('startSesssion')
    };

    render() {
        return (
            <BaseContainer>
                <div className="AddStoryListPage">
                    <Input inputType='text' labelText='Session Name'/>
                    <Input inputType='number' labelText='Number of Voters'/>
                    <p>Paste your story list (each line will be converted as a story)</p>
                    <textarea name="stories" cols="60" rows="20"/>
                    <Link to='/scrum-master-planning'
                          onClick={this.startSession}>Start
                        Session</Link>
                </div>
            </BaseContainer>

        )
    }
}

export default AddStoryListPage;