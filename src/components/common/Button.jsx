import React from 'react'

function Button({ id, text, action }) {
  return <button
  id={id}
  className='button'
  onClick={action}>
    {text}
  </button>
}

export default Button