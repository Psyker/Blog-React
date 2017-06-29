import React from 'react';

export default class CommentForm extends React.Component {
    constructor() {
        super();

        this.state = {
            characters: 0
        };

        this._getCharacterCount = this._getCharacterCount.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return(
            <form className="pb-10" onSubmit={this._handleSubmit}>
                <div className="form-group">
                    <label className="form-label" >Name</label>
                    <input className="form-input" type="text" ref={c => this._author = c} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label className="form-label" >Message</label>
                    <textarea className="form-input" ref={c => this._body = c} onChange={this._getCharacterCount} placeholder="Votre commentaire" rows="3"></textarea>
                </div>
                <p>{this.state.characters} caractères.</p>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
            </form>
        )
    }

    _getCharacterCount() {
        this.setState({
            characters: this._body.value.length
        })
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({characters: 0});
    }
}