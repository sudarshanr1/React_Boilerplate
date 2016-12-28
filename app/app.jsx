var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')
ReactDOM.render(
  <p>Boiler plate</p>,
  document.getElementById('app')
);
