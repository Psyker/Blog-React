import React from 'react';
import Comment from './Comment'
import CommentForm from "./CommentForm";


export default class CommentBox extends React.Component {
    static defaultProps = {
        comments: []
    };

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
        return this.props.comments.map((comment) => {
            return <Comment {...comment} key={comment.id}/>
        })
    }

    render() {
        const comments = this._getComments();
        return (
            <div>
                <h3>{this._getCommentsTitle(comments.length)}</h3>
                <CommentForm addComment={this.props.addComment}/>
                {this.props.loading ? <div className="loading loading-lg mt-1"></div> : ''}
                {comments}
            </div>
        )
    }
}
