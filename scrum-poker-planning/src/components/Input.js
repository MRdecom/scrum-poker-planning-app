import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

export default class Input extends React.Component {
    static propTypes = {
        inputType: propTypes.string,
        labelText: propTypes.string
    };

    static defaultProps = {
        inputType: 'text',
        labelText: 'input name'
    };

    render() {
        return (
            <div className="Input">
                <label>{this.props.labelText}</label>
                <input type={this.props.inputType}/>
            </div>
        );
    }
}
