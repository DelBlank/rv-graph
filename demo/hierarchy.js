import React from 'react'
import Graph from '../dist/vis-graph'

const BaseDemo = () => (
  <Graph
    graph={{
      nodes: [
        { id: 1, label: 'Node 1', level: 1 },
        { id: 2, label: 'Node 2', level: 1 },
        { id: 3, label: 'Node 3', level: 2 },
        { id: 4, label: 'Node 4', level: 3 },
        { id: 5, label: 'Node 5', level: 3 }
      ],
      edges: [
        { from: 1, to: 3 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 3, to: 5 },
        { from: 4, to: 5 },
        { from: 2, to: 4 }
      ]
    }}
    options={{
      layout: {
        hierarchical: {
          direction: 'LR'
        }
      },
      physics: false,
      edges: {
        arrows: { to: false }
      }
    }}
  />
)

export default BaseDemo
