import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

const listOfValues = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '134', '?'];


export default class ActiveStory extends React.Component {
    state = {
        info: 'Please Vote!!',
        userVoted: false
    };

    static propTypes = {
        storyName: propTypes.string,
    };

    static defaultProps = {
        storyName: 'storyName',
    };

    sendPoint(point, i) {
        if (!this.props.userVoted ) {
            this.props.sendPoint(point);
            this.setState({
                info: point + ' Voted',
                selectedItem: i,
            });
        }
    };

    changeMyCssClass(i) {
        const isItemSelected = this.state.selectedItem === i;
        return isItemSelected ? "Block GreenBlock" : "Block"
    }

    render() {
        return (
            <div className="ActiveStory">
                <p className="ActiveStoryTitle">Active Story</p>
                <label>{this.props.storyName}</label>
                <div className="PointBlock">
                    {listOfValues.map((elm, i) => {
                        return (
                            <div key={i} onClick={this.sendPoint.bind(this, elm, i)}
                                 className={this.changeMyCssClass(i)}>
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
