/**
 * Created by harekamsingh on 2/11/16.
 */
'use strict';
var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Admin Panel</h1>
                <p>Using react, react router, flux.</p>
            </div>
        );
    }
});
module.exports = Home;