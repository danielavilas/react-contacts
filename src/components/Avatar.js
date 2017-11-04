import React from 'react'
import PropTypes from 'prop-types'

const Avatar = props => (
  <div className='contact-avatar' style={{ backgroundImage: `url(${props.url})` }}/>
)

Avatar.propTypes = {
  avatarURL: PropTypes.string
}

export default Avatar
