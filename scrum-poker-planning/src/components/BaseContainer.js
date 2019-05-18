import React from 'react';
import "../style.css";
import Logo from "./Logo";

export default class BaseContainer extends React.Component {
    render() {
        return (
            <main className='BaseContainer'>
                <div className='Logo'>
                    <Logo/>
                </div>
                <div className='BaseContainer-Body'>
                    {this.props.children}
                </div>
            </main>
        );
    }
}