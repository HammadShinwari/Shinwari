import React from 'react'

// style file import
import '../Style/portfolio.css'

function Portfolio() {
  return (
    <>
        <div className="portfolio-container">

            <div className="portfolio-text">
                <h1>Portfolio</h1>
                <div className="p-text-container">
                    <p>All</p>
                    <p>Html&css</p>
                    <p>Javascript</p>
                    <p>React js</p>
                </div>
            </div>

            <div className="portfolio-cards">

              <div className="left-cards">

                <div className="left-card-1">
                  
                </div>

                <div className="left-card-2">

                </div>

              </div>

              <div className="medium-cards">

                <div className="medium-card">

                </div>

              </div>

              <div className="right-cards">

                <div className="right-card-1">

                </div>

                <div className="right-card-2">

                </div>

              </div>

            </div>

        </div>
    </>
  )
}

export default Portfolio