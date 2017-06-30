import React from 'react';
import Comment from './Comment'
import jQuery from 'jquery'
import CommentForm from "./CommentForm";
import { admin_username, admin_password } from "../config/parameters.json"
import { _postComment } from '../api'

export default class CommentBox extends React.Component {
    constructor () {
        super();

        this.state = {
            comments: []
        };

        this._addComment = this._addComment.bind(this);
    }

    componentDidMount() {
        this.setState({
          comments: this.props.project.comments
        })
    }

    render() {
        const comments = this._getComments();
        return (
            <div>
                <h3>{this._getCommentsTitle(comments.length)}</h3>
                <CommentForm addComment={this._addComment}/>
                {comments}
            </div>
        )
    }

    _addComment(commentAuthor, commentBody) {
        const {comments} = this.state;
        const comment = {
            author: commentAuthor,
            message: commentBody,
            project: this.props.project
        };
        _postComment(comment);
        console.log(comment)
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'Aucun commentaires';
        } else if (commentCount === 1) {
            return '1 commentaire';
        } else {
            return `${commentCount} commentaires`;
        }
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return <Comment {...comment} key={comment.id}/>
        })
    }
}
