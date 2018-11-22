import { merge, isEqual as _isEqual, differenceWith } from 'lodash'

// 图默认配置
const defaultOptions = {
  physics: {
    stabilization: false
  },
  interaction: {
    hover: true,
    tooltipDelay: 100
  },
  autoResize: false,
  nodes: {
    shape: 'circle'
  },
  edges: {
    smooth: false,
    width: 0.5,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.5
      }
    }
  }
}

// 变化前后是否是同一个节点
export const idIsEqual = (n1, n2) => n1.id === n2.id

// 变化前后是否是同一条边
export const edgeIsEqual = (e1, e2) => e1.from === e2.from && e1.to === e2.to

// 计算默认配置和用户配置合集
export const mergeOptions = options => merge(defaultOptions, options)

// 计算改变前后删除的数据集
export const getRemovedData = (data = [], nextData = [], isEqual = _isEqual) =>
  differenceWith(data, nextData, isEqual)

// 计算改变前后新增的数据集
export const getAddedData = (data = [], nextData = [], isEqual = _isEqual) =>
  differenceWith(nextData, data, isEqual)

// 计算改变前后变化的数据集
export const getChangedData = (data = [], nextData = [], isEqual = _isEqual) => (addedData = []) =>
  differenceWith(differenceWith(nextData, data, isEqual), addedData)

// 给网络绑定或取消事件
export const bindEvents = (network, events = {}, on = true) =>
  Object.keys(events).forEach(eventName =>
    (on ? network.on : network.off)(eventName, events[eventName])
  )
