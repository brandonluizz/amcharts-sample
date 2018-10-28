import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
