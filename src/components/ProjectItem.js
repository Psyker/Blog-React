import React from 'react';
import {NavLink} from 'react-router-dom';

export default class ProjectItem extends React.Component {
    render() {
        return (
            <div className="column col-4 col-xs-12">
                <div className="card">
                    <div className="card-image">
                        <img alt="thumbnail" src="http://lorempixel.com/900/506/nature"
                             className="img-responsive"/>
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">{this.props.title}</div>
                        <div className="card-subtitle text-gray">
                            {
                                this.props.tags.map((tag) => {
                                    return tag.name
                                })
                            }
                        </div>
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