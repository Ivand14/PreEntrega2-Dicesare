import { InfinitySpin } from  'react-loader-spinner'
import React from 'react'

const Loading = () => {

  return (
    <div className='contSpinner'>
        <InfinitySpin 
          width='200'
          color="#4fa94d"
        />
    </div>
  )
}

export default Loading