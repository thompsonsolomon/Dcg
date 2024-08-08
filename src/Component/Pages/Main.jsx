import React from 'react'
import Footer from '../Constants/Footer/Footer'
import Home from '../Containers/Home/Home'
import HomepageSermon from '../Containers/Sermon/HomepageSermon'
import BecomeMember, { WatchLife } from '../Containers/Welcome/BecomeMember'
import Welcome from '../Containers/Welcome/Welcome'

function Main() {
  return (
    <div>
        <Home />
        <Welcome />
        <BecomeMember />
        <HomepageSermon />
        <WatchLife />
        <Footer />
    </div>
  )
}

export default Main