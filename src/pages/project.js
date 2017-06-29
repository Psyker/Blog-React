import React from 'react';
import jQuery from 'jquery';
import CommentBox from "../components/CommentBox";

export default class ProjectPage extends React.Component {
    constructor() {
        super() ;

        this.state = {
            project: []
        }
    }

    componentWillMount() {
        this._fetchProject()
    }

    render() {
        const project = this.state.project;
        return (
            <div>
                <div className="nav-padding container">
                    <div>
                        {project.description}
                    </div>
                    <div>
                        {project.title}
                    </div>
                    <div className="columns bg-grey">
                        <div className="column col-5 centered">
                            <CommentBox/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _fetchProject() {
        jQuery.ajax({
            method: 'GET',
            url: '/project/' + this.props.match.params.id,
            success: (project) => {
                this.setState(() => {
                    return {project: project}
                })
            }
        });
    }
}