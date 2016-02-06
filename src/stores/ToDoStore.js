var AppDispatcher = require('../actions/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
//var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var myName = 'Jhunex Jun';

var TodoStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMyName: function() {
    return {name: myName};
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.source;
    let name = payload.data;

    switch(action) {
      case 'VIEW_ACTION':
          myName = name;
          TodoStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = TodoStore;