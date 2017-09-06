import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="tile comment">
                <div className="tile-icon">
                    <figure className="avatar">
                        <img src="../logo.svg" alt=""/>
                    </figure>
                </div>
                <div className="tile-content">
                    <p className="tile-title"><strong>{this.props.author}</strong></p>
                    <p className="tile-subtitle">{this.props.message}</p>
                </div>
            </div>
        )
    }
}
