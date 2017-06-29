import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Project extends React.Component
{
    render() {
        return(
            <div className="column col-6">
                <div className="filter-item card">
                    <div className="card-header">
                        <NavLink to={'/project/' + this.props.id}>
                            <button className="btn btn-primary float-right">
                                <i className="icon icon-search"></i>
                            </button>
                        </NavLink>
                        <h4 className="card-title">{this.props.title}</h4>
                        <h6 className="card-subtitle">{this.props.tag}</h6>
                    </div>
                </div>
            </div>
        )
    }
}