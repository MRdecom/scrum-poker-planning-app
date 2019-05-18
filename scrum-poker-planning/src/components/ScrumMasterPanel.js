import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';
import Input from "./Input";

export default class ScrumMasterPanel extends React.Component {
    static propTypes = {
        storyName: propTypes.string,
    };

    static defaultProps = {
        storyName: 'storyName',
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
                    <tr>
                        <td>Red</td>
                        <td>Blue</td>
                    </tr>
                </table>
                <Input labelText='Final Score' inputType='number'/>
                <button> End Voting For {this.prop.storyName}</button>
            </div>
        );
    }
}
