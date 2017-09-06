import React from 'react';
import Comment from './Comment'
import CommentForm from "./CommentForm";
import { _postComment } from '../api'

export default class CommentBox extends React.Component {
    constructor () {
        super();

        this.state = {
            comments: [],
            loading: false
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
                {this.state.loading ? <div className="loading loading-lg mt-1"></div> : ''}
                {comments}
            </div>
        )
    }

    _addComment(commentAuthor, commentBody) {
        const {comments} = this.state;
        const comment = {
            author: commentAuthor,
            message: commentBody,
            project: this.props.project.id,
        };
        this.setState({loading: true});
        _postComment(comment).then((comment) => {
           this.setState({comments: [comment, ...comments ], loading: false})
        })
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
