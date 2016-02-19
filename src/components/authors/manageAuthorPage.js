/**
 * Created by harekamsingh on 2/16/16.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function () {
        var authorId = this.props.params.id;//from path author/:id
        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },
    setAuthorState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};
        if (this.state.author.firstName.length < 3) {
            formIsValid = false;
            this.state.errors.firstName = "First name must be atleast 3 characters long";
        }
        if (this.state.author.lastName.length < 3) {
            formIsValid = false;
            this.state.errors.lastName = "Last name must be atleast 3 characters long";
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveAuthor: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid())
            return;
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        this.setState({dirty: false});
        toastr.success("Author saved.");
        this.transitionTo("authors");
    },
    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageAuthorPage;