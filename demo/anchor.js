import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from 'antd'

const HashAnchor = ({ links = [] }) => (
  <Anchor className="m-anchor">
    {links.map(({ href, title }, key) => (
      <Anchor.Link href={href} title={title} key={key} />
    ))}
  </Anchor>
)

HashAnchor.propTypes = {
  links: PropTypes.array
}

export default HashAnchor
