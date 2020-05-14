import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './app/store';
import './App.css';
import Battles from './app/container/battles';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" component={Battles} exact />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
