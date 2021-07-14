import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/login/login';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
reportWebVitals();
