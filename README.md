## rv-graph

基于 [vis-network](http://visjs.org/docs/network/) 的 react 可视化网络图库。

## Install

```shell
$ npm i -S rv-graph
```

## Component Props

| name       | type                                     | required | default                                                                      | description                                                                                                                                  |
| ---------- | ---------------------------------------- | -------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| graph      | object{nodes: object[], edges: object[]} |          | {nodes: [], edges: []}                                                       | 关系图的节点数据集和边数据集, 配置详见 [nodes](http://visjs.org/docs/network/nodes.html) / [edges](http://visjs.org/docs/network/edges.html) |
| options    | object                                   |          | 详见 [util.js](https://github.com/DelBlank/rv-graph/blob/master/src/util.js) | 关系图配置项，详见 [vis-network-options](http://visjs.org/docs/network/#options)                                                             |
| events     | object                                   |          | {}                                                                           | 关系图事件，详见 [vis-network-events](http://visjs.org/docs/network/#Events)                                                                 |
| identifier | string                                   |          | uuid.v4()                                                                    | 组件渲染节点的样式 id                                                                                                                        |
| className  | string                                   |          |                                                                              | 组件 className                                                                                                                               |
| style      | object                                   |          | {width: '100%', height: '100%'}                                              | 组件样式                                                                                                                                     |

## Ref Props

rv-graph 提供感知和操作关系图的能力，对于组件实例提供以下属性

| name    | type   | description                                                                                    |
| ------- | ------ | ---------------------------------------------------------------------------------------------- |
| network | object | 底层关系图对象，提供的操作详见 [vis-network-methods](http://visjs.org/docs/network/#methods)   |
| nodes   | object | 底层关系图节点对象，提供的操作详见 [vis-nodes-methods](http://visjs.org/docs/network/#methods) |
| edges   | object | 底层关系图边对象，提供的操作详见 [vis-edges-methods](http://visjs.org/docs/network/#methods)   |

## Example

| rv-graph                                                                         | [vis-network](http://visjs.org/network_examples.html)   |
| -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [base-usage](https://github.com/DelBlank/rv-graph/blob/master/demo/base-demo.js) | http://visjs.org/examples/network/basicUsage.html       |
| [node-icon](https://github.com/DelBlank/rv-graph/blob/master/demo/node-icon.js)  | http://visjs.org/examples/network/nodeStyles/icons.html |
