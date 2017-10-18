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

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
