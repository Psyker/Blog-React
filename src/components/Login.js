import React from 'react';
import FormLogin from './FormLogin';
import '../css/login.css'

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container grid-lg block-center">
                <div className="columns">
                    <div className="column">
                        <FormLogin/>
                    </div>
                </div>
            </div>
        )
    }
}