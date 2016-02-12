'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let provinces = {};

let ProvincesStore = assign(BaseStore(), {
    getProvincesList: function() {
        return provinces;
    }
});

ProvincesStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.GET_PROVINCES:
            provinces = payload.data;
            ProvincesStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = ProvincesStore;