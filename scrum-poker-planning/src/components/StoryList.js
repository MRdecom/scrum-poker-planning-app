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
                    <tr>
                        <td>Red</td>
                        <td>Yellow</td>
                        <td>Blue</td>
                    </tr>
                </table>
            </div>
        );
    }
}