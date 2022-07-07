import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import './app.scss';

import Home from './pages/home/home';

interface AllProps {
  store: Store;
}

function App(props: AllProps) {
  const { store } = props;
  return (
    <Provider store={store} >
      <div className="App">
        <Home />
      </div>
    </Provider >
  );
}

export default App;
