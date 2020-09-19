import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Art from './Art';
import Order from './Order';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'

const routing = (
  <Router>
    <div className="nav">
      <Link className="wrap" to="/">Home</Link>
      <Link className="wrap" to="/art">Art</Link>
    </div>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/art" component={Art} />
      <Route path="/order" component={Order} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));