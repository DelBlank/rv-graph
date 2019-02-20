import React from 'react'
import Graph from '../dist/vis-graph'

// 节点分组配置信息
const options = {
  groups: {
    // 使用 font-awesome 样式
    fontAwesome: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf007',
        size: 50,
        color: '#aa00ff'
      }
    },
    // 使用 ionicons 样式
    ionicons: {
      shape: 'icon',
      icon: {
        face: 'Ionicons',
        code: '\uf47e',
        size: 50,
        color: '#aa00ff'
      }
    }
  }
}

// 节点
const nodes = [
  {
    id: 1,
    label: 'font-awesome user 1',
    group: 'fontAwesome'
  },
  {
    id: 2,
    label: 'font-awesome user 2',
    group: 'fontAwesome'
  },
  {
    id: 3,
    label: 'ionicons user 1',
    group: 'ionicons'
  },
  {
    id: 4,
    label: 'ionicons user 2',
    group: 'ionicons'
  }
]

// 边
const edges = [
  {
    from: 1,
    to: 2
  },
  {
    from: 2,
    to: 3
  },
  {
    from: 3,
    to: 4
  },
  {
    from: 4,
    to: 1
  }
]

const NodeIconDemo = () => <Graph graph={{ nodes, edges }} options={options} />

export default NodeIconDemo
