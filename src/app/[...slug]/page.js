import HeroSection from '@/components/HeroSection'
import InnovationSection from '@/components/InnovationSection'
import React from 'react'

const DynamicPage = ({params}) => {
   
  return (
    <div className=''>
        <HeroSection/>
        <InnovationSection/>
    </div>
  )
}

export default DynamicPage
