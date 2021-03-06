import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import { AppContainer } from '~/containers'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk),

)

export default function RNSkeleton (props) {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
}




