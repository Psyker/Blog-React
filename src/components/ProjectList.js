import React from 'react';
import ProjectItem from "./ProjectItem";
import {_fetchData} from '../scripts/api';

export default class ProjectList extends React.Component {
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
                                return <ProjectItem {...project} key={project.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
