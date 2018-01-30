import React from 'react';
import Header from './Header';
import Footer from './Footer.js'
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
            showModal: false
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
                <div className="modal modal-sm active" id="modal-id">
                    <a onClick={this._handleClose} class="modal-overlay" aria-label="Close"></a>
                    <div className="modal-container">
                        <div className="modal-header">
                            <a onClick={this._handleClose} class="btn btn-clear float-right" aria-label="Close"></a>
                            <div className="modal-title h5">Admin</div>
                        </div>
                        <div className="modal-body">
                            <div className="content">
                                <FormLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginModal>
        ) : null;
        return (
            <div>
                {modal}
                <Header/>
                {this.props.children}
                <Footer openModal={this._handleShow}/>
            </div>
        )
    }
}
