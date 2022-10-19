import '../../styles/common/Statistic.scss'
import React from 'react'

function Statistic({ icon, title, text }) {
  return <div className='statistic'>
    <i className='material-symbols-outlined'>{icon}</i>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
}

export default Statistic