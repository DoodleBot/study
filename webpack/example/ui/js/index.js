// import $ from 'jquery';
import _ from 'lodash';

var styles = require('../css/index.css');
var messages = require('./messages');
var app = document.getElementById('app');

app.innerHTML = '<p>' + messages.hi + ' ' + messages.there + '</p>';

if(DEVELOPMENT && module.hot) {
    module.hot.accept();
}

// function component () {
//   var element = document.createElement('div');

//   element.innerHTML = _.map(['Hello','webpack'], function(item){
//     return item + ' ';
//   });

//   return element;
// }

// document.body.appendChild(component());
