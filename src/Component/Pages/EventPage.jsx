import React from 'react'
import Footer from '../Constants/Footer/Footer'
import NaveBar from '../Constants/Header/NaveBar'
import Event from '../Containers/Event/Event'

function EventPage() {
  return (
    <div>
        <NaveBar />
        <Event />
        <Footer />
    </div>
  )
}

export default EventPage