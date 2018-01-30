import React from 'react';
import '../css/login.css'

const modalRoot = document.getElementById('#modal-root');

export default class LoginModal extends React.Component {

    constructor(props) {
        super(props);

        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}