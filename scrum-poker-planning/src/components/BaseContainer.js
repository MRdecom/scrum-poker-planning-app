import React from 'react';
import "../style.css";
import Logo from "./Logo";
import Link from "react-router-dom/es/Link";

export default class BaseContainer extends React.Component {
    render() {
        return (
            <main className='BaseContainer'>
                    <Logo/>
                <Link to='/'>Home</Link> <br/>
                <Link to='/scrum-master-planning'>ScrumM</Link><br/>
                <Link to='/developer-planning' >Dev</Link>
                <div className='BaseContainer-Body'>
                    {this.props.children}
                </div>
            </main>
        );
    }
}