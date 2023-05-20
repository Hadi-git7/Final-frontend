import React from 'react'
import './Home.css'
import HomeActivity from './Components/HomeActivity/HomeActivity'
import HomeBlog from './Components/HomeBlog/HomeBlog'
import HomeLanding from './Components/HomeLanding/HomeLanding'
import HomeResource from './Components/HomeResource/HomeResource'

function Home() {
  return (
    <>
   <HomeLanding />
   <HomeActivity />
   <HomeResource />
   <HomeBlog />
   </>
  )
}

export default Home