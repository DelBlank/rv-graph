import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
// import Graph from '../src/vis-graph'

import HashAnchor from './anchor'

const links = [
  {
    href: '#base',
    title: '基础demo'
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>rv-graph</h1>
        <div className="m-content">
          <HashAnchor links={links} />
          <div className="m-example">azxasx</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
