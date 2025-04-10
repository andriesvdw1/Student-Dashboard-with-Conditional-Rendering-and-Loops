import React from 'react'
import './StudentCard.css'
function StudentCard({name, grade, status}) {
  return (
    <div className='student-card'>
        <div>{name}</div>
        <div>{grade}</div>
        <div>{status}</div>
    </div>
  )
}

export default StudentCard