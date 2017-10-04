import React from 'react';
import Project from "./Project";
import { _fetchData } from '../api';

export default class ProjectList extends React.Component
{
    constructor() {
        super();

        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
      _fetchData('projects').then((projects) => {
          this.setState({projects})
      })
    }

    render() {
        return (
            <div className="section section-updates bg-gray">
                <div className="container grid-lg">
                    <h2 className="text-center">Portfolio</h2>
                    <div className="columns">
                        {
                            this.state.projects.map((project) => {
                            return <Project {...project} key={project.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
