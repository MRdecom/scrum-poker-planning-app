import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';
import Input from "./Input";

export default class ScrumMasterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.getInputData = this.getInputData.bind(this);
    }

    state = {
        finalPoint: ''
    };

    static propTypes = {
        storyName: propTypes.string,
        voterInfo: propTypes.array,
        voteEnded: propTypes.bool,
        endVoting: propTypes.func
    };

    static defaultProps = {
        voterInfo: undefined,
        voteEnded: false,
        storyName: '',
        masterScore: '0'
    };

    endVoting = () => {
        if (this.state.finalPoint) {
            let data = this.state.finalPoint;
            this.props.endVoting(data);
            this.clearFinalPoint();
        }
    };

    getInputData(data) {
        this.setState({
            finalPoint: data
        })
    }

    clearFinalPoint() {
        this.setState({
            finalPoint: ''
        });
    }

    render() {
        const {voterInfo} = this.props;
        return (
            <div className="ScrumMasterPanel">
                <p className="PanelName">Scrum Master Panel</p>
                <p>{this.props.storyName} is active</p>
                {voterInfo &&
                <table>
                    <tbody>{
                        voterInfo.map((elm, i) => {
                            return (
                                <tr key={i}>
                                    <td>Voter {i}</td>
                                    <td> : {this.props.voteEnded
                                        ? elm.score
                                        : (elm.score !== '0'
                                            ? elm.score
                                            : 'Not Voted')}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>Scrum Master</td>
                        <td> : {this.props.voteEnded
                            ? this.props.masterScore
                            : (this.props.masterScore !== '0'
                                ? this.props.masterScore
                                : 'Not Voted')}
                        </td>
                    </tr>
                    </tbody>

                </table>}

                <div className="FinalScoreBlock">
                    <Input labelText='Final Score' inputType='number' getDataFromInput={this.getInputData}/>
                    <div className="FinalScoreButton" onClick={this.endVoting}> End Voting
                        For {this.props.storyName}</div>
                </div>

            </div>
        );
    }
}
