import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        Not Found. Go to page <Link to='/'>Main</Link>
    </div>
  )
}

export default NotFound