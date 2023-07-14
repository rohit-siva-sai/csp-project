import Basara from '@/components/project/basara'
import BasaraVideo from '@/components/project/basaraVideo'
import Heading from '@/components/project/heading'
import Public from '@/components/project/public'
import SEO from '@bradgarropy/next-seo'
import React from 'react'



const Project = () => {
  return (
    <div className='pb-12'>
      <SEO
        title="beware / project"
        description="creating awarness fot not to use online loan apps and effects using them"
        keywords={["loan app","awarness","beware","beware-sigma"]}
        icon="/logo3.png"
       
      />
      <Heading/>
      <Basara/>
      <Public/>
      <BasaraVideo/>
    </div>
  )
}

export default Project
