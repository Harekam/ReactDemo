/**
 * Created by harekamsingh on 2/11/16.
 */
'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Admin Panel</h1>
                <p>Using react, react router, flux.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});
module.exports = Home;