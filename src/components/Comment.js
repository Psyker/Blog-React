import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="tile comment animated fadeInDown">
                <div className="tile-icon">
                    <figure className="avatar">
                        <img src={`https://api.adorable.io/avatars/122/${this.props.author}.png`} alt=""/>
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
