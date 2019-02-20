import React, { Component } from 'react'
import isEqual from 'lodash/isEqual'
import vis from 'vis'
import uuid from 'uuid'
import PropTypes from 'prop-types'
// import './style.less'
import '../asset/ionicons.css'
import '../asset/font-awesome.css'
import 'vis/dist/vis-network.min.css'

import {
  idIsEqual,
  edgeIsEqual,
  mergeOptions,
  getRemovedData,
  getAddedData,
  getChangedData,
  bindEvents
} from './util'

class Graph extends Component {
  constructor(props) {
    super(props)

    const { identifier } = props

    this.state = {
      identifier: identifier !== undefined ? identifier : uuid.v4()
    }
  }

  componentDidMount() {
    this.initEdges(this.props.graph.edges)
    this.initNodes(this.props.graph.nodes)
    this.initGraph()
  }

  shouldComponentUpdate(nextProps) {
    let nodesChange = !isEqual(this.Nodes.get(), nextProps.graph.nodes)
    let edgesChange = !isEqual(this.Edges.get(), nextProps.graph.edges)
    let optionsChange = !isEqual(this.props.options, nextProps.options)
    let eventsChange = !isEqual(this.props.events, nextProps.events)

    // 节点数据集发生变化，则更新变化的数据集
    if (nodesChange) {
      const nodes = this.Nodes.get()
      const removedNodes = getRemovedData(nodes, nextProps.graph.nodes, idIsEqual)
      const addedNodes = getAddedData(nodes, nextProps.graph.nodes, idIsEqual)
      const changedNodes = getChangedData(nodes, nextProps.graph.nodes)(addedNodes)

      this.patchNodes({ removedNodes, addedNodes, changedNodes })
    }

    // 边数据集发生变化，则更新变化的数据集
    if (edgesChange) {
      const edges = this.Edges.get()
      const removedEdges = getRemovedData(edges, nextProps.graph.edges, edgeIsEqual)
      const addedEdges = getAddedData(edges, nextProps.graph.edges, edgeIsEqual)
      const changedEdges = getChangedData(edges, nextProps.graph.edges)(addedEdges)

      this.patchEdges({ removedEdges, addedEdges, changedEdges })
    }

    // 配置项发生变化，则更新变化的配置
    if (optionsChange) {
      this.Network.setOptions(nextProps.options)
    }

    // 事件数据集发生变化，则重新绑定和取消变化的事件
    if (eventsChange) {
      let events = this.props.events || {}
      bindEvents(this.Network, events, false)

      events = nextProps.events || {}
      bindEvents(this.Network, events)
    }

    return false
  }

  // 初始化节点
  initNodes(nodes) {
    this.Nodes = new vis.DataSet()

    // 避免由于 nodes 为空导致后续非空 nodes 无法渲染
    // nodes.length || (nodes = [{id: uuid.v4(), color: 'rgba(255,255,255,0)'}])

    this.Nodes.add(nodes)
  }

  // 初始化边
  initEdges(edges) {
    this.Edges = new vis.DataSet()

    this.Edges.add(edges)
  }

  // 初始化全图
  initGraph() {
    let container = document.getElementById(this.state.identifier)
    let options = mergeOptions(this.props.options)

    // 新建 network
    this.Network = new vis.Network(
      container,
      {
        edges: this.Edges,
        nodes: this.Nodes
      },
      options
    )

    // 绑定用户自定义事件
    let events = this.props.events || {}
    bindEvents(this.Network, events)
  }

  // 更新边
  patchEdges({ removedEdges, addedEdges, changedEdges }) {
    this.Edges.remove(removedEdges)
    this.Edges.add(addedEdges)
    this.Edges.update(changedEdges)
  }

  // 更新节点
  patchNodes({ removedNodes, addedNodes, changedNodes }) {
    this.Nodes.remove(removedNodes)
    this.Nodes.add(addedNodes)
    this.Nodes.update(changedNodes)
  }

  get network() {
    return this.Network
  }

  get nodes() {
    return this.Nodes
  }

  get edges() {
    return this.Edges
  }

  render() {
    const { identifier } = this.state
    const { style, className } = this.props

    return React.createElement(
      'div',
      {
        id: identifier,
        style,
        className
      },
      identifier
    )
  }
}

Graph.defaultProps = {
  graph: { nodes: [], edges: [] },
  options: {},
  events: {},
  className: '',
  style: { width: '100%', height: '100%' }
}
Graph.propTypes = {
  identifier: PropTypes.string,
  className: PropTypes.string,
  graph: PropTypes.object,
  style: PropTypes.object,
  options: PropTypes.object,
  events: PropTypes.object
}

export default Graph
