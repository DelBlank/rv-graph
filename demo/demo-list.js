import React from 'react'
import PropTypes from 'prop-types'

const DemoList = ({ links = [] }) =>
  links.map(({ href, Component }, key) => (
    <div id={href.replace('#', '')} key={key}>
      <Component />
    </div>
  ))

DemoList.propTypes = {
  links: PropTypes.array
}

export default DemoList
