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
        comments: project.comments
      })
    })
  }

  render() {
    const {id, description, title} = this.state;
    return (

        <div>
            <div className="nav-padding container">
                <div>
                  {description}
                </div>
                <div>
                  {title}
                </div>
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
