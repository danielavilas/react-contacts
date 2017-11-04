import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const Contact = ({ name, email, avatarURL, children }) => (
  <div className='contact-list-item'>
    <Avatar url={avatarURL}/>
    <div className='contact-details'>
      <p>{name}</p>
      <p>{email}</p>
    </div>

    {children}
  </div>
)

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarURL: PropTypes.string
}

export default Contact
