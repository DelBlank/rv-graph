import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import HashAnchor from './anchor'
import DemoList from './demo-list'
import BaseDemo from './base-demo'
import 'antd/dist/antd.css'
import './index.less'

const links = [
  {
    href: '#base',
    title: '基础demo',
    Component: BaseDemo
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>rv-graph</h1>
        <div className="m-content">
          <HashAnchor links={links} />

          <div className="m-example">
            <DemoList links={links} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
