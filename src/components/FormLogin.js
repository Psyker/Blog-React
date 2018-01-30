import React from 'react';
import { _login } from '../scripts/api'

export default class FormLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            message : null,
            code : null
        };

        this._handleLogin = this._handleLogin.bind(this);
    }

    render () {
        const { message, code } = this.state;
        return (
            <form onSubmit={this._handleLogin}>
                {
                    code !== 200 && null !== code ?
                    <div className="toast toast-error">
                        {message}
                    </div> : null
                }
                <div className="form-group">
                    <label className="form-label" htmlFor="_username">Username</label>
                    <input className="form-input" type="text" name="_username" ref={c => this._username = c}/>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="_password">Password</label>
                    <input className="form-input" type="password" name="_password" ref={c => this._password = c}/>
                </div>
                <div className="form-group">
                    <input className="btn btn-primary btn-block" type="submit" value="Se connecter"/>
                </div>
            </form>
        )
    }

    _handleLogin(event) {
        event.preventDefault();
        const credentials = {
            _username: this._username.value,
            _password: this._password.value,
        };
        _login(credentials)
            .fail((error) => {
                let messageError = JSON.parse(error.responseText);
                this.setState({
                    message : messageError.message,
                    code: messageError.code
                })
            })
            .then((response) => {
                window.localStorage.setItem('token', response.token);
                window.location = "/admin"
            });
        this._username.value = '';
        this._password.value = '';
    }
}
