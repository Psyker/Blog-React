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
        return(
            <div className="container col-8 pt-10">
                <h2 className="text-center">Portfolio</h2>
                <div className="filter-body columns col-12">
                    {
                        this.state.projects.length > 0 ? this.state.projects.map((project) => {
                          return <Project {...project} key={project.id}/>
                        }) :
                            <div className="centered">
                              <div className="loading centered">&nbsp;</div>
                              <br/>
                              <p className="text-bold">In coming !</p>
                            </div>
                    }
                </div>
            </div>
        );
    }
}
