import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Project extends React.Component
{
    render() {
        return(
            <div className="column col-6 col-xs-12">
                <div className="card">
                    <div className="card-header">
                        <h4>{this.props.title}</h4>
                        <small>
                            {
                                this.props.tags.map((tag) => {
                                    return tag.name
                                })
                            }
                        </small>
                    </div>
                    <div className="card-body"></div>
                    <div className="card-footer">
                        <NavLink to={'/project/' + this.props.id}>
                            <button className="btn btn-primary">
                                <i className="icon icon-search"></i>
                                &nbsp; Voir
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}