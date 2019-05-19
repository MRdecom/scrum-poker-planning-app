import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

const listOfValues = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '134', '?'];


export default class ActiveStory extends React.Component {

    state = {
        info: 'Please Vote!!'
    };

    static propTypes = {
        storyName: propTypes.string,
    };

    static defaultProps = {
        storyName: 'storyName',
    };

    sendPoint(point) {
        this.props.sendPoint(point);
        this.setState({
            info: point + ' Voted'
        });
    };

    render() {
        return (
            <div className="ActiveStory">
                <p className="ActiveStoryTitle">Active Story</p>
                <label>{this.props.storyName}</label>
                <div className="PointBlock">
                    {listOfValues.map((elm, i) => {
                        return (
                            <div key={i} onClick={this.sendPoint.bind(this, elm)} className="Block">
                                <p>{elm}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="VoteInfoBlock">
                    <span>{this.state.info}</span>
                </div>
            </div>
        );
    }
}
