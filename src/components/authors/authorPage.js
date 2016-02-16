/**
 * Created by harekamsingh on 2/11/16.
 */
"use strict";
var React = require('react');
var AuthorApi = require('../../api/authorApi');
var Link = require('react-router').Link;
var AuthorList = require('./autherList');
var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        if (this.isMounted())
            this.setState({authors: AuthorApi.getAllAuthors()});
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