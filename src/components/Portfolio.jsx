import React from 'react'

// style file import
import '../Style/portfolio.css';

// images file import

// html images 
import ecommerceUiImg from '../images/ecommerce.jpeg';
import homebuilderImg from '../images/home-builder.jpeg';
import netflixImg from '../images/netflix.jpeg';
import bondiImg from '../images/bondi.jpeg';

// javascript images 
import codeEditorImg from '../images/code-editor.jpeg';
import shinwariSocial from '../images/shinwarisocial.jpeg';
import educationImg from '../images/education.jpeg';
import snakeImg from '../images/snake-game.jpeg';
import quizImg from '../images/quiz.jpeg';
import adminImg from '../images/admin.jpeg';

function Portfolio() {
  return (
    <>
        <div className="portfolio-container">

            <div className="portfolio-text">
                <h1>Portfolio</h1>
            </div>

            <div className="portfolio-cards">

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={ecommerceUiImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Ecommerce Ui</h2>
                  <p>This Project is made with HTML, CSS, and Bootstrap.</p>
                  <div className="card-buttons">
                    <a href="https://ecommerce-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={homebuilderImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Home Builder</h2>
                  <p>This Project is made with HTML, CSS, and Bootstrap.</p>
                  <div className="card-buttons">
                    <a href="http://homebuilder-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>
                
              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={netflixImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Netflix Clone</h2>
                  <p>This Project is made with HTML, CSS, and Bootstrap.</p>
                  <div className="card-buttons">
                    <a href="https://netflix-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={bondiImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Landing Page</h2>
                  <p>This Project is made with HTML, CSS, and Bootstrap.</p>
                  <div className="card-buttons">
                    <a href="https://bondi-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={codeEditorImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Code Editor</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://code-editor-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={shinwariSocial} alt="" />
                </div>

                <div className="card-text">
                  <h2>Social App</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://shinwarisocial.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={educationImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Education Website</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://education-website-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={snakeImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Snake Game</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://snake-game-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={quizImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Quiz App</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://ox-game.surge.sh/" target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={adminImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Admin Dashboard</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://admin-dashboard-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={ecommerceUiImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Calculator</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://calculator-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

              <div className="portfolio-card">

                <div className="card-img">
                  <img src={ecommerceUiImg} alt="" />
                </div>

                <div className="card-text">
                  <h2>Calculator</h2>
                  <p>This Project is made with HTML, CSS, and Javascript.</p>
                  <div className="card-buttons">
                    <a href="https://calculator-by-hammad.surge.sh/"  target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>

            </div>

        </div>
    </>
  )
}

export default Portfolio;