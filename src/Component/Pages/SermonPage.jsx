import React from 'react'
import Footer from '../Constants/Footer/Footer'
import NaveBar from '../Constants/Header/NaveBar'
import Sermon from '../Containers/Sermon/Sermon'

function SermonPage() {
  return (
    <div>
      <NaveBar />
      <Sermon />
      <Footer />
    </div>
  )
}

export default SermonPage