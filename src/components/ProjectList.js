import React from 'react';
import jQuery from 'jquery';
import Project from "./Project";

export default class ProjectList extends React.Component
{
    constructor() {
        super();

        this.state = {
            projects: [],
        };
    }

    componentWillMount() {
        this._fetchProjects()
    }

    render() {
        const projects = this._getProjects();
        return(
            <div className="container col-8 pt-10">
                <h2 className="text-center">Portfolio</h2>
                <div className="filter-body columns col-12">
                    {projects}
                </div>
            </div>
        );
    }

    _fetchProjects() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3000/project',
            success: (projects) => {
                this.setState({projects})
            }
        });
    }

    _getProjects() {
        return this.state.projects.map((project) => {
            return <Project {...project} key={project.id}/>
        })
    }

}
