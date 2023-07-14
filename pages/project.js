import Basara from '@/components/project/basara'
import BasaraVideo from '@/components/project/basaraVideo'
import Heading from '@/components/project/heading'
import Public from '@/components/project/public'
import React from 'react'



const Project = () => {
  return (
    <div className='pb-12'>
      <Heading/>
      <Basara/>
      <Public/>
      <BasaraVideo/>
    </div>
  )
}

export default Project
