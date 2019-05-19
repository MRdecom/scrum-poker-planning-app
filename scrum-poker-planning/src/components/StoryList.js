import React from 'react';
import '../style.css';
import * as propTypes from 'prop-types';


export default class StoryList extends React.Component {

    static propTypes = {
        storyList: propTypes.array
    };

    static defaultProps = {
        storyList: undefined
    };

    render() {
        const {storyList} = this.props;
        return (
            <div className="StoryList">
                <p>StoryList</p>
                {storyList &&
                    <table>
                    <thead>
                    <tr>
                        <th>Story</th>
                        <th>Story Point</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>{
                        storyList.map((elm,i) => {
                            return (
                                <tr key={i}>
                                    <td>{elm.storyName}</td>
                                    <td>{elm.finalScore === '0' ? '' : elm.finalScore}</td>
                                    <td>{elm.status}</td>
                                </tr>
                            )
                        })
                    }</tbody>
                </table>}
            </div>
        );
    }
}