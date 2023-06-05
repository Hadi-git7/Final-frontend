import React, { useEffect, useState } from 'react'
import './Home.css'
import HomeActivity from './Components/HomeActivity/HomeActivity'
import HomeBlog from './Components/HomeBlog/HomeBlog'
import HomeLanding from './Components/HomeLanding/HomeLanding'
import HomeResource from './Components/HomeResource/HomeResource'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import Loader from '../Loader/Loader'
import Aos from 'aos';

function Home() {

  const [loading, setIsLoading] = useState(true);


  useEffect(()=>{
    setTimeout(()=>{
    setIsLoading(false)
    Aos.init();

    },3000)
  })

  if(loading){
    return <Loader/>
  }
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