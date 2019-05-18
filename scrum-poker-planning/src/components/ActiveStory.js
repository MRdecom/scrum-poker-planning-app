import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

export default class ActiveStory extends React.Component {
    static propTypes = {
        storyName: propTypes.string,
    };

    static defaultProps = {
        storyName: 'storyName',
    };

    render() {
        return (
            <div className="ActiveStory">
                <p>Active Story</p>
                <label>{this.props.storyName}</label>
                <div className="PointBlock">
                    <div className="Block">1</div>
                    <div className="Block">2</div>
                    <div className="Block">3</div>
                    <div className="Block">5</div>
                    <div className="Block">8</div>
                    <div className="Block">13</div>
                    <div className="Block">21</div>
                    <div className="Block">34</div>
                    <div className="Block">55</div>
                    <div className="Block">59</div>
                    <div className="Block">134</div>
                    <div className="Block">?</div>
                </div>
            </div>
        );
    }
}
