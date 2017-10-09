import React from 'react'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
   return (
        <footer className="section section-footer">
            <div className="grid-footer container grid-lg">
                <p><NavLink to="/login">Admin</NavLink> | <a>Github</a> | <a>Twitter</a></p>
                <p>Designed with Spectre.css . Thanks for the visit !</p>
            </div>
        </footer>
   )
}

