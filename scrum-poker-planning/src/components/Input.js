import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';

export default class Input extends React.Component {

    state = {
        inputValue: undefined
    };

    static propTypes = {
        inputType: propTypes.string,
        labelText: propTypes.string
    };

    static defaultProps = {
        inputType: 'text',
        labelText: 'input name'
    };

    updateInputValue = (e) => {
        if (!!e.target.value) {
            this.props.getDataFromInput(e.target.value);
        }
    };

    render() {
        return (
            <div className="Input">
                <label>{this.props.labelText}</label>
                <input type={this.props.inputType} onChange={this.updateInputValue}/>
            </div>
        );
    }
}
