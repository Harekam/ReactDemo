/**
 * Created by harekamsingh on 2/11/16.
 */
"use strict";
var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var Link = require('react-router').Link;
var AuthorList = require('./autherList');
var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    render: function () {

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});
module.exports = Authors;