import React from 'react';
import CommentBox from "../components/CommentBox";
import { _fetchDataById } from '../scripts/api';

export default class ProjectPage extends React.Component {
  constructor() {
    super() ;

    this.state = {
      id: null,
      title: null,
      description: null,
      tags: [],
      comments: [],
    };

  }

  componentDidMount() {
    _fetchDataById('projects', this.props.match.params.id).then((project) => {
      this.setState({
        id: project.id,
        title: project.title,
        description: project.description,
        tags: project.tags,
        comments: project.comments
      })
    })
  }

  render() {
    const {id, description, title, tags} = this.state;
    return (
        <div>
            <div className="container">
                <section className="section section-hero">
                  <section className="grid-hero container grid-lg text-center">
                    <h1 className="overview-title">{title}</h1>
                    <h2 className="overview-subtitle">{description}</h2>
                      {
                        tags.map((tag) => {
                          return <p key={tag.id}>{tag.name}</p>
                        })
                      }
                    <div className="columns">
                      <div className="column">
                        <a href="https://github.com/Psyker" className="btn btn-primary">See on Github</a>&nbsp;
                      </div>
                    </div>
                  </section>
                </section>
              {
                id ?
                    <div className="columns bg-primary">
                        <div className="column col-5 centered text-light">
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
