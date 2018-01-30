import React from 'react';
import Header from './Header';
import {Footer} from './Footer.js'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import '../css/index.css';
import '../css/custom.css'
import '../css/comments.css'
import '../css/project.css'
import 'animate.css/animate.min.css'
import LoginModal from "./LoginModal";
import FormLogin from "./FormLogin";

export default class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: true
        };

        this._handleShow = this._handleShow.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    _handleShow() {
        this.setState({showModal: true})
    }

    _handleClose() {
        this.setState({showModal: false})
    }


    render() {
        const modal = this.state.showModal ? (
            <LoginModal>
                <FormLogin/>
            </LoginModal>
        ) : null;
        return (
            <div>
                {modal}
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
