import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="section section-footer">
                <div className="grid-footer container grid-lg">
                    <p><a onClick={this.props.openModal}>Admin</a> | <a>Github</a> | <a>Twitter</a></p>
                    <p>Designed with Spectre.css . Thanks for the visit !</p>
                </div>
            </footer>
        )
    }
    
};
