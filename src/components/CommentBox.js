import React from 'react';
import Comment from './Comment'
import jQuery from 'jquery'
import CommentForm from "./CommentForm";

export default class CommentBox extends React.Component {
    constructor () {
        super();

        this.state = {
            comments: []
        };

        this._addComment = this._addComment.bind(this);
    }

    componentWillMount() {
        this._fetchComments();
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
        const comment = {
            id: this.state.comments.length + 1,
            author: commentAuthor,
            content: commentBody,
        };

        jQuery.ajax({
            'method': 'POST',
            'url': 'http://localhost:3000/comments',
            'data': comment,
            'success': () => {
                this.setState({
                    comments: this.state.comments.concat([comment])
                })
            }
        });
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

    _fetchComments() {
        jQuery.ajax({
            'method': 'GET',
            'url': 'http://localhost:3000/comments',
            success:  (comments) => {
                this.setState({comments})
            }
        });
    }
}