import React from 'react';
import Header from './components/signup/main/Header';
import Content from './components/signup/main/Content';
import Footer from './components/signup/main/Footer';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Content />
      <Footer />
      </Provider>
  );
}


export default App;
