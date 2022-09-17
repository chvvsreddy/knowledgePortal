import React from 'react'
import './index.css'

function CourseItemRequested() {
  return (
    <div className='course'>
        <div className='course-img'>
        <img src={require('../../images/course-1.png')} />
        </div>
        <div className='course-info'>
            <h4>Learn Python: The complete python programming course</h4>
            <p>Catergory: Web devlopment</p>
            <p>Sub catergory: Python</p>
            <p>Level: Beginer</p>
        </div>
        <div className='request-status'>Crowd funding</div>
    </div>
  )
}

export default CourseItemRequested