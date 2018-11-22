import {
  idIsEqual,
  edgeIsEqual,
  mergeOptions,
  getRemovedData,
  getAddedData,
  getChangedData,
  bindEvents
} from 'src/util'

const nodes = [{ id: 1 }, { id: 2 }]
const nextNodes = [{ id: 2, value: 1 }, { id: 3 }]
const edges = [{ from: 1, to: 2 }, { from: 1, to: 3 }]
const nextEdges = [{ from: 1, to: 3, value: 1 }, { from: 1, to: 4 }]

describe('test util', () => {
  it('should merge options', () => {
    const options = mergeOptions({ nodes: { font: { size: 12 } } })

    expect(options).toHaveProperty('nodes.font.size', 12)
    expect(options).toHaveProperty('physics.stabilization', false)
  })

  it('should get removed data', () => {
    expect(getRemovedData()).toEqual([])
    expect(getRemovedData(nodes, nextNodes, idIsEqual)).toEqual([{ id: 1 }])
    expect(getRemovedData(edges, nextEdges, edgeIsEqual)).toEqual([{ from: 1, to: 2 }])
  })

  it('should get added data', () => {
    expect(getAddedData()).toEqual([])
    expect(getAddedData(nodes, nextNodes, idIsEqual)).toEqual([{ id: 3 }])
    expect(getAddedData(edges, nextEdges, edgeIsEqual)).toEqual([{ from: 1, to: 4 }])
  })

  it('should get changed data', () => {
    expect(getChangedData()()).toEqual([])
    expect(getChangedData(nodes, nextNodes)(getAddedData(nodes, nextNodes, idIsEqual))).toEqual([
      { id: 2, value: 1 }
    ])
    expect(getChangedData(edges, nextEdges)(getAddedData(edges, nextEdges, edgeIsEqual))).toEqual([
      { from: 1, to: 3, value: 1 }
    ])
  })

  it('should bind events to network', () => {
    const network = { on: jest.fn(), off: jest.fn() }
    const events = { click: () => {} }

    bindEvents(network)

    expect(network.on).not.toBeCalled()
    expect(network.off).not.toBeCalled()

    bindEvents(network, events)

    expect(network.on).toBeCalledWith('click', events.click)

    bindEvents(network, events, false)
    expect(network.off).toBeCalledWith('click', events.click)
  })
})
