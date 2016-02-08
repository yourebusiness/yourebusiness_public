var Dispatcher = require('../dispatcher/Dispatcher');
// try this soon
// var Dispatcher = require('path/to/this/directory/Flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      data: action,
      actionType: ''
    });
  }

});

module.exports = AppDispatcher;