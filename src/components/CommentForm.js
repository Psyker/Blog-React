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
            <form onSubmit={this._handleSubmit}>
                <div className="form-group">
                    <label className="form-label" >Name</label>
                    <input name='appbundle_comment[author]' className="form-input" type="text" ref={c => this._author = c} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label className="form-label" >Message</label>
                    <textarea name='appbundle_comment[message]' className="form-input" ref={c => this._body = c} onChange={this._getCharacterCount} placeholder="Votre commentaire" rows="3"/>
                </div>
                <input type="hidden" name='appbundle_comment[avatar]'/>
                <p>{this.state.characters} caractères.</p>
                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-margin" disabled={this.state.characters <= 0} >Envoyer</button>
                </div>
            </form>
        )
    }

    _getCharacterCount() {
        this.setState({
            characters: this._body.value.length
        });
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({characters: 0});
    }
}
