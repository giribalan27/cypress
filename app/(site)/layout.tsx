import Header from '@/components/landing-page/header'
import React from 'react'

const HomePageLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <Header />
      <div className='mt-10'>
        {children}
      </div>
    </div>
  )
}

export default HomePageLayout