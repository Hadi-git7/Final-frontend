import React from 'react'
import './Home.css'
import HomeActivity from './Components/HomeActivity/HomeActivity'
import HomeBlog from './Components/HomeBlog/HomeBlog'
import HomeLanding from './Components/HomeLanding/HomeLanding'
import HomeResource from './Components/HomeResource/HomeResource'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'

function Home() {
  return (
    <>
   <HomeLanding />
   <HomeActivity />
   <HomeBlog />

   <HomeResource />
   </>
  )
}

export default Home