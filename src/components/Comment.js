import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="tile pt-10">
                <div className="tile-content">
                    <p className="tile-title">{this.props.author}</p>
                    <p className="tile-subtitle">{this.props.message}</p>
                </div>
            </div>
        )
    }
}
