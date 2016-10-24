import React, { Component } from 'react'

// This works, but is not friendly to tree shaking
// import { HashRouter, Match, Link, Miss } from 'react-router'
import HashRouter from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Miss from 'react-router/Miss'

import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import Functional from './components/Functional'
import ColorBackground from './components/ColorBackground'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <HashRouter>
    <div>

      {/* A list of links to get to the examples */}
      <div className="links">
        <Link to="/">Hello World</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/functional">Functional Example</Link>
        <Link to="/color/255/0/0">Red</Link>
        <Link to="/color/0/255/0">Green</Link>
        <Link to="/color/0/0/255">Blue</Link>
      </div>

      {/* The container in which individual pages will render */}
      <div className="container">
        <Match pattern="/" exactly component={HelloWorld} />
        <Match pattern="/counter" component={Counter} />
        <Match pattern="/functional" component={Functional} />
        <Match pattern="/color/:r/:g/:b" component={ColorBackground} />
        <Miss component={NotFound} />
      </div>

    </div>
  </HashRouter>
)

export default App
