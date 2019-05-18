import React from 'react';
import '../style.css';

export default class StoryListCreate extends React.Component {
    render() {
        return (
            <div className="StoryListCreate">
                <input type={this.props.inputType}/>
            </div>
        );
    }
}