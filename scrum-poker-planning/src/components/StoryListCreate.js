import React from 'react';
import '../style.css';

export default class StoryListCreate extends React.Component {
    render() {
        return (
            <div className="StoryListCreate">
                <p>Paste your story list (each line will be converted as a story)</p>
                <textarea name="stories" cols="60" rows="20"/>
            </div>
        );
    }
}