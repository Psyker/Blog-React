import React from 'react';
import ProjectList from "../components/ProjectList";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <section className="section section-hero bg-grey overview">
                    <section className="grid-hero container grid-960 text-center">
                        <h1 className="overview-title">Théo Bourgoin</h1>
                        <h2 className="overview-subtitle">Junior <u>Back-end</u> Developer, Baby <u>Front-end</u> Developer</h2>
                        <div className="columns">
                            <div className="column">
                                <a href="https://github.com/Psyker" className="btn btn-primary">Github</a>&nbsp;
                                <a className="btn btn-primary">Portfolio</a>
                            </div>
                        </div>
                    </section>
                </section>
                <ProjectList/>
            </div>
        )
    }
}