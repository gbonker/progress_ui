import React, { Component } from 'react';
import './App.css';
import Breadcrumbs from './components/shared/Breadcrumbs';
import Main from './components/shared/Main';

class App extends Component {
  render() {
    return (
      <div className="App app-wrapper">
        <div className="app-header">
          <section className="app-nav-header">
            <div className="app-nav-container">
              <a href="anchorId" className="skip-nav reader-only">Skip to Main Content</a>
              <div className="sidebar-toggle-container">
                <a className="sidebar-toggle" data-toggle="dropdown">
                  <span className="menu-icon glyphicons glyphicons-menu-hamburger x1" aria-hidden="true"> </span>
                </a>
              </div>
              <div className="app-branding">
                <a className="app-title" href="">
                  <h1 className="logo">
                    <strong>ProgressUI</strong>
                  </h1>
                </a>
              </div>
            </div>
          </section>
          <div className="app-content">
            <div className="max-width">
              <div className="sub-nav">
                <Breadcrumbs />
              </div>
              <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
