import React from 'react';
import ProjectList from "../components/ProjectList";
import About from '../components/About';
import Timeline from '../components/Timeline'

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="section section-hero">
                    <div className="grid-hero container grid-lg text-center">
                        <h1 >Théo Bourgoin</h1>
                        <h2>Junior <u>Back-end</u> Developer, Baby <u>Front-end</u> Developer</h2>
                        <div className="columns">
                            <div className="column">
                                <a href="https://github.com/Psyker" className="btn btn-primary">Github</a>&nbsp;
                                <a className="btn btn-primary">Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
                <ProjectList/>
                <Timeline/>
            </div>
        )
    }
}