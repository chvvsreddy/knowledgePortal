import React from 'react'

function MessageItem() {
  return (
    <div className='class-event'>
        <div className='v-center'><img src={require('../../images/user.png')} /></div>
        <div>
          <p className='class-name'>John joined networking circle</p>
          <p className='class-time'>10min ago</p>
        </div>
      </div>
  )
}

export default MessageItem