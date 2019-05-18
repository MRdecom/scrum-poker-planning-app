import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';
import Input from "./Input";

export default class ScrumMasterPanel extends React.Component {
    static propTypes = {
        storyName: propTypes.string,
        voterInfo: propTypes.object,
        voteEnded: propTypes.bool,
    };

    static defaultProps = {
        storyName: 'storyName',
        voterInfo: {},
        voteEnded: false
    };

    render() {
        return (
            <div className="ScrumMasterPanel">
                <p>scrum master panel</p>
                <p>{this.props.storyName} is active</p>
                <table>
                    <tr>
                        <th>Voter</th>
                        <th>Status</th>
                    </tr>
                    {
                        this.props.voterInfo.map((elm) => {
                            return (
                                <tr>
                                    <td>{elm.name}</td>
                                    <td>  :  {this.props.voteEnded ? elm.point : elm.status}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                <Input labelText='Final Score' inputType='number'/>
                <button> End Voting For {this.props.storyName}</button>
            </div>
        );
    }
}
