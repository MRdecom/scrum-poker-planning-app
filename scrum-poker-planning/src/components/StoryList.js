import React from 'react';
import '../style.css';


export default class StoryList extends React.Component {

    render() {
        return (
            <div className="StoryList">
                <p>StoryList</p>
                <table>
                    <tr>
                        <th>Story</th>
                        <th>Story Point</th>
                        <th>Status</th>
                    </tr>
                    {
                        this.props.storyList.map((elm) => {
                            return (
                            <tr>
                                <td>{elm.name}</td>
                                <td>{elm.point}</td>
                                <td>{elm.status}</td>
                            </tr>
                            )
                        })
                    }

                </table>
            </div>
        );
    }
}