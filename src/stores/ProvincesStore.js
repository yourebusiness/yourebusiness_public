var AppDispatcher = require('../actions/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = null;

var ProvincesStore = assign({}, EventEmitter.prototype, {
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
    return {provinces: };
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.ActionType;

    switch(action) {
      case 'GET_PROVINCES':
          myName = name;
          TodoStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = ProvincesStore;