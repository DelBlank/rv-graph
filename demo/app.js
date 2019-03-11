import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import HashAnchor from './anchor'
import DemoList from './demo-list'
import BaseDemo from './base-demo'
import NodeIconDemo from './node-icon'
import HierarchyDemo from './hierarchy'
import '../dist/vis-graph.css'
import 'antd/dist/antd.css'
import './index.less'

const links = [
  {
    href: '#base-usage',
    title: '基础示例',
    Component: BaseDemo
  },
  {
    href: '#node-icon',
    title: '节点图标',
    Component: NodeIconDemo
  },
  {
    href: '#hierarchy',
    title: '树形图',
    Component: HierarchyDemo
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
