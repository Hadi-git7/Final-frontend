import React from 'react'
import NavbarDash from './Components/NavbarDash/NavbarDash'
import ActivityDash from './Components/ActivityDash/ActivityDash'
import ResourceDash from './Components/ResourceDash/ResourceDash'
import BlogDash from './Components/BlogDash/BlogDash'
import OverviewDash from './Components/OverviewDash/OverviewDash'
import { Route, Routes } from 'react-router-dom'
import HomeDash from './Components/HomeDash/HomeDash'

function Dashboard() {
  return (
    <>
      <NavbarDash />
      <Routes>
        <Route path='/' Component={HomeDash} />
        <Route path="/activity" Component={ActivityDash} />
        <Route path="/resource" Component={ResourceDash} />
        <Route path="/blog" Component={BlogDash} />
        <Route path="/overview" Component={OverviewDash} />

      </Routes>
    </>)
}

export default Dashboard