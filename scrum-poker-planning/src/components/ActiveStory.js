import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

const listOfValues = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '134', '?'];


export default class ActiveStory extends React.Component {
    static propTypes = {
        storyName: propTypes.string,
    };

    static defaultProps = {
        storyName: 'storyName',
    };

    sendPoint(point) {
        this.props.sendPoint(point);
    };

    render() {
        return (
            <div className="ActiveStory">
                <p>Active Story</p>
                <label>{this.props.storyName}</label>
                <div className="PointBlock">
                    {listOfValues.map((elm,i) => {
                        return (
                            <div key={i} onClick={this.sendPoint.bind(this, {elm})} className="Block">{elm}</div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
