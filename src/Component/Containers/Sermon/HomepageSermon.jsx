import React from 'react'
import "../Sermon/HomepageSermon.css"
import SermonCard from './SermonCard';

function HomepageSermon() {
  return (
    <div className="HomePage">
      <div className="HomePageCon">
        <div className="HomePageText">
          <h2>Latest Sermon</h2>
          <p>
            A church isn't a building—it's the people. We meet in locations
            around the United States and globally at the desciples Church
            Online. No matter where you join us.
          </p>
        </div>

        <SermonCard />


      </div>
    </div>
  )
}

export default HomepageSermon