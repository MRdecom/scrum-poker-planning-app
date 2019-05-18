import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';


export default class StoryList extends React.Component {

    static propTypes = {
        storyList: propTypes.array,

    };

    render() {
        return (
            <div className="StoryList">
                <p>StoryList</p>
                <table>
                    <thead>
                    <tr>
                        <th>Story</th>
                        <th>Story Point</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.props.storyList.map((elm,i) => {
                            return (
                                <tr key={i}>
                                    <td>{elm.name}</td>
                                    <td>{elm.point}</td>
                                    <td>{elm.status}</td>
                                </tr>
                            )
                        })
                    }</tbody>


                </table>
            </div>
        );
    }
}