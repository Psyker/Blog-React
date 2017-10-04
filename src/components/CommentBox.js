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
                {this.state.loading ? <div className="loading text-dark loading-lg mt-1"></div> : ''}
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
            avatar: `https://api.adorable.io/avatars/40/${commentAuthor}.png`
        };
        this.setState({loading: true});
        _postComment(comment).then((comment) => {
           this.setState({comments: [comment, ...comments ], loading: false})
        })
    }

     _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments';
        } else if (commentCount === 1) {
            return `Comment (${commentCount})`;
        } else {
            return `Comments ${commentCount}`;
        }
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return <Comment {...comment} key={comment.id}/>
        })
    }
}
