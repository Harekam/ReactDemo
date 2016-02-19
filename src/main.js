'use strict';
var React = require('react');

var Router = require('react-router');
var routes = require('./routes');
var InitialActions = require('./actions/initializeActions');
InitialActions.initApp();
Router.run(routes, function (Handler) {//Router.HistoryLocation
    React.render(<Handler/>, document.getElementById('app'));
});

