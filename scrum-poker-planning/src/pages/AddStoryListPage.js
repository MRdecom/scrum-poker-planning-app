import React, {Component} from 'react';
import "../style.css";
import BaseContainer from "../components/BaseContainer";
import Logo from "../components/Logo";
import Input from "../components/Input";
import StoryListCreate from "../components/StoryListCreate";

class AddStoryListPage extends Component {
    render() {
        return (
            <BaseContainer>
                <div className="AddStoryListPage">
                    <Input inputType='text' labelText='Session Name'/>
                    <Input inputType='number' labelText='Number of Voters'/>
                    <StoryListCreate/>
                    <button>Start Session</button>
                </div>
            </BaseContainer>

        )
    }
}

export default AddStoryListPage;