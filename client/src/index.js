import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './Products';
import Order from './Order';
import Admin from './Admin';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'

const routing = (
  <Router>
    <div className="nav">
      <Link className="wrap" to="/">Home</Link>
      <Link className="wrap" to="/products">Products</Link>
    </div>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/products" component={Products} />
      <Route path="/order" component={Order} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));