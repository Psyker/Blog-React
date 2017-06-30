import React from 'react';
import CommentBox from "../components/CommentBox";
import { _fetchDataById } from '../api';

export default class ProjectPage extends React.Component {
  constructor() {
    super() ;

    this.state = {
      id: null,
      title: null,
      description: null,
      comments: [],
    }
  }

  componentDidMount() {
    _fetchDataById('projects', this.props.match.params.id).then((project) => {
      this.setState({
        id: project.id,
        title: project.title,
        description: project.description,
        type: project.type,
        comments: project.comments
      })
    })
  }

  render() {
    const {id, description, title, type} = this.state;
    return (

        <div>
            <div className="nav-padding-project container">
                <section className="section section-hero overview">
                  <section className="grid-hero container grid-960 text-center">
                    <h1 className="overview-title">{title}</h1>
                    <h2 className="overview-subtitle">{description}</h2>
                    <label className="chip">
                      {type}
                    </label>
                    <div className="columns">
                      <div className="column">
                        <a href="https://github.com/Psyker" className="btn btn-primary">See on Github</a>&nbsp;
                      </div>
                    </div>
                  </section>
                </section>
              {
                id ?
                    <div className="columns bg-grey">
                        <div className="column col-5 centered">
                            <CommentBox project={this.state}/>
                        </div>
                    </div> :
                    <div className="centered">
                      <div className="loading centered">&nbsp;</div>
                    </div>
              }
            </div>
        </div>
    )
  }
}
