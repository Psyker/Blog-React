import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="tile comment animated fadeInDown text-dark">
                <div className="tile-icon">
                    <figure className="avatar">
                        <img src={this.props.avatar} alt=""/>
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
