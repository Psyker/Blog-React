import React from 'react';
import CommentBox from "./CommentBox";
import {_fetchDataById} from '../scripts/api';
import {_postComment} from '../scripts/api'
import Layout from "./Layout";

export default class ProjectPage extends React.Component {
    constructor() {
        super();

        this.state = {
            id: null,
            title: null,
            description: null,
            tags: [],
            comments: [],
            loading: false
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

    _addComment = (commentAuthor, commentBody) => {
        const {comments} = this.state;
        const comment = {
            author: commentAuthor,
            message: commentBody,
            project: this.state.id,
            avatar: `https://api.adorable.io/avatars/40/${commentAuthor}.png`
        };
        this.setState({loading: true});
        _postComment(comment).then((comment) => {
            this.setState({comments: [comment, ...comments], loading: false})
        })
    };

    render() {
        const {id, description, title, tags} = this.state;
        return (
            <div>
                <Layout>
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
                                        <a href="https://github.com/Psyker" className="btn btn-primary">See on
                                            Github</a>&nbsp;
                                    </div>
                                </div>
                            </section>
                        </section>
                        {
                            id ?
                                <div className="columns bg-primary">
                                    <div className="column col-5 centered text-light">
                                        <CommentBox comments={this.state.comments} addComment={this._addComment}/>
                                    </div>
                                </div> :
                                <div className="centered">
                                    <div className="loading centered">&nbsp;</div>
                                </div>
                        }
                    </div>
                </Layout>
            </div>
        )
    }
}
