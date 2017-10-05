import React from 'react';
import { _login } from '../scripts/api'

export default class FormLogin extends React.Component {
    constructor() {
        super();

        this._handleLogin = this._handleLogin.bind(this);
    }

    render () {
        return (
            <form onSubmit={this._handleLogin}>
                <input type="text" name="_username" ref={c => this._username = c}/>
                <input type="text" name="_password" ref={c => this._password = c}/>
                <input type="submit" value="Se connecter"/>
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
            .then((response) => {
                if (response) {
                    console.log(response)
                }
            });
        this._username.value = '';
        this._password.value = '';
    }


}