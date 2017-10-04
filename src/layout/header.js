import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="navbar bg-white">
            <section className="navbar-section">
                <NavLink className="btn btn-link" to="/home">Accueil</NavLink>
                <a className="btn btn-link" href="">Projets</a>
            </section>
            <section className="navbar-center"></section>
            <section className="navbar-section">
                <a className="btn btn-link" href="">Twitter</a>
                <a className="btn btn-link" href="">Github</a>
            </section>
        </header>
        );
    }
}