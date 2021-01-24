import React from 'react';
import ReactDom from 'react-dom';
import Provider from 'react-redux';
import App from './App'
import store from '../store/store';
render();
store.subscribe(render);

function render() {
  const state = store.getState();
  ReactDom.render(
    <App state={state.items} />,
    document.getElementById('root')
  );
}
