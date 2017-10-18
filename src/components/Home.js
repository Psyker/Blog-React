import React from 'react';
import ProjectList from "./ProjectList";
import About from './About';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="section section-hero">
                    <div className="grid-hero container grid-lg text-center">
                        <div className="col-2 m-1 p-2">
                            <img className="img-responsive circle" src="https://avatars1.githubusercontent.com/u/17385665?v=4&s=460" alt=""/>
                        </div>
                        <h1 >Théo Bourgoin</h1>
                        <h2>Junior <u>Back-end</u> Developer, Baby <u>Front-end</u> Developer</h2>
                        <div className="columns">
                            <div className="column m-1">
                                <a href="https://github.com/Psyker" className="btn btn-primary">Github</a>&nbsp;
                                <a className="btn btn-primary">Portfolio</a>
                            </div>
                        </div>
                        <div className="columns p-1 m-1">
                            <div className="col-4 col-xs-12">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <span className="card-title">
                                            Back-end
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                        et quas molestias excepturi sint occaecati
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 col-xs-12">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <span className="card-title">
                                            Front-end
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                        et quas molestias excepturi sint occaecati
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 col-xs-12">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <span className="card-title">
                                            Serveur
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                        et quas molestias excepturi sint occaecati
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
                <ProjectList/>
            </div>
        )
    }
}