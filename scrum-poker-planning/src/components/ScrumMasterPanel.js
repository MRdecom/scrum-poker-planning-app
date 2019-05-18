import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';
import Input from "./Input";

export default class ScrumMasterPanel extends React.Component {
    static propTypes = {
        storyName: propTypes.string,
        voterInfo: propTypes.array,
        voteEnded: propTypes.bool,
        endVoting: propTypes.func
    };

    static defaultProps = {
        storyName: 'storyName',
        voterInfo: {},
        voteEnded: false
    };

    endVoting = () => {
        const data = 'get data from inputs';
        this.props.endVoting(data);
        // statelerden alınacak.
        // send vote info to server.
        // voteEnded =  true olacak.
    };


    render() {
        return (
            <div className="ScrumMasterPanel">
                <p>scrum master panel</p>
                <p>{this.props.storyName} is active</p>
                <table>
                    <thead>
                    <tr>
                        <th>Voter</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.props.voterInfo.map((elm,i) => {
                            return (
                                <tr key={i}>
                                    <td>{elm.name}</td>
                                    <td> : {this.props.voteEnded ? elm.point : elm.status}</td>
                                </tr>
                            )
                        })
                    }</tbody>

                </table>
                <Input labelText='Final Score' inputType='number'/>
                <button onClick={this.endVoting}> End Voting For {this.props.storyName}</button>
            </div>
        );
    }
}
