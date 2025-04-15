import React from 'react'

export default function Exhibit({title, metric}) {
  return (
      <div className='card'>
        <h2 className='card-title'>{title}</h2>
        <h1 className='card-metric'>{metric}</h1>
      </div>
  )
}
