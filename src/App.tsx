import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'

import './App.css';

function App() {
  return (
    <div className="App">

      {/* Page 1 */}
      <section className="landing">
        <header className="header">
          <div className="title">
            Developments
          </div>
          <div className="byline">
            Original Works by New York Choreographers
          </div>
          <div className="date">
            Sunday, August 4, 2024 in New York City
          </div>
        </header>
        <div className="main image-wrapper">
          <img
            className="wrap"
            alt="A dancer artistically posed, surrounded by vibrant red and blue hues, with a reflection on a water-like surface."
            src={image1}
          />
        </div>
      </section>
      <section>
        <h2>
          Separated
        </h2>
        <p>
          <i>Featuring The Oren Korenblum Dance Company</i>
        </p>
        <p>
          <b>Choreography: Oren Korenblum</b>
        </p>
        <p>
          Associate Choreographer: Rashaan James II
        </p>
        <p>
          Music: Johann Sebastian Bach, Gidon Kremer
        </p>

        <p className='center-italic'>
          Mary Donnelly, Will Geoghegan, Rachel Hall, Grace Hutton, Becky Grace Kalman, Oren Korenblum, TJ Kubler, Mason Neally, Rafa Pepén
        </p>
        <p>
          In a world where tap dance is treated differently because of the reality of loud sound, and metal on the bottom of the shoes that can cause damage to floors, tap dance is separated from other dance forms. I saw this as an opportunity to create and showcase my feelings and love for sound and music, and show the limitations and collaboration through art and vision.
        </p>
      </section>
      <section>
        <h2>
          Hope Springs Eternal
        </h2>
        <p>
          <b>Choreography: Alex Sanchez</b>
        </p>
        <p>
          Music: Max Richter, Antonio Vivaldi
        </p>
        <p className='center-italic'>
          Emily Baggerly, Tamaki Horibe, Emma Kaufman, Alexa Racioppi, Avelina Sanchez
        </p>
        <p>
          <i>
            Hope springs eternal in the human breast:<br />
            Man never is, but always to be blest.<br />
            The soul, uneasy and confined from home,<br />
            Rests and expatiates in a life to come<br />
            <br />
            — Alexander Pope
          </i>
        </p>
      </section>
      <section>
        <h2>
          Take Time to Get Got
        </h2>
        <p>
          <b>
            Choreography: Tommy Scrivens
          </b>
        </p>
        <p>
          Music: Louis Armstrong, Don Shirley, Al Jarreau, Bob Crosby, The Bob Cats
        </p>
        <p className='center-italic'>
          <b>The Chase</b><br />
          Kate Carpenter, Anna Chin, Gianna Conklin-Gonsalves, Bobby M. Davis, Ellen McGihon, Liliana Patracuolla, Bella Seitz
        </p>
        <p className='center-italic'>
          <b>The Lesson</b><br />
          Bobby M. Davis and Kate Carpenter, Anna Chin, Gianna Conklin-Gonsalves, Ellen McGihon, Liliana Patracuolla, Bella Seitz
        </p>
        <p className='center-italic'>
          <b>…And Then</b><br />
          Kate Carpenter, Anna Chin, Bella Seitz
        </p>
        <p className='center-italic'>
          <b>The Getting</b><br />
          Tommy Scrivens
        </p>
      </section>
      <section>
        <h2>Drink Me</h2>
        <p><b>Choreography: Sabrina Gail Lobner</b></p>
        <p>Music: Laurie Anderson, David Byrne, Philip Glass, Suzanne Vega</p>
        <p className='center-italic'>
          Gigi Hausman, Sabrina Gail Lobner, Max O’Connell, Matthew Ortner, Chloe Singer
        </p>
        <p>
          <i>
            And why do I want? I want to live and feel all the shades, tones and variations of mental and physical experience possible in my life.<br />
            <br />
            — Sylvia Plath
          </i>
        </p>
      </section>
      <section>
        <h2>
          11
        </h2>
        <p>
          <i>
            Featuring The Cole Collective
          </i>
        </p>
        <p><b>Choreography: Nicole Ohr</b> in collaboration with Edward Tolve and Michael Verre</p>
        <p>Music: Tom Player</p>
        <p className='center-italic'>
          Nicole Ohr, Edward Tolve, Micheal Verre
        </p>
        <p>
          When hearing this piece of music by Tom Player, Elaina’s Theme, Nicole instantly felt a story line emerge, which was very representative of her journey with Hydrocephalus, an incurable medical condition where there’s excess fluid on the brain. Using sound and movement, Cole Collective aims to bring more awareness to Hydrocephalus through this work.
        </p>
      </section>
      <div className="secondary image-wrapper">
        <img
          className="wrap"
          alt="A dancer in a shimmering red dress lies on a reflective surface, bathed in soft red and blue lighting effects."
          src={image2}
        />
      </div>
      <section className='production-team'>
        <h3>PRODUCTION TEAM</h3>
        <p className='row'>
          <span className='role'>Executive Producer</span>
          <span className='dots'></span>
          <span className='name'>Sabrina Gail Lobner</span>
        </p>
        <p className='row'>
          <span className='role'>Stage Mgr. & Technical Dir.</span>
          <span className='dots'></span>
          <span className='name'>Gwen Appenfeller</span>
        </p>
        <p className='row'>
          <span className='role'>House Mgrs.</span>
          <span className='dots'></span>
          <span className='name'>Josh McWhortor, Shuga Ohashi</span>
        </p>
        <p className='row'>
          <span className='role'>Digital Program</span>
          <span className='dots'></span>
          <span className='name'>Lucas Chin</span>
        </p>
        <p className='row'>
          <span className='role'>Performance Video & Photos</span>
          <span className='dots'></span>
          <span className='name'>Tim Fuchs Productions</span>
        </p>
        <p className='row'>
          <span className='role'>Program & Promo. Images</span>
          <span className='dots'></span>
          <span className='name'>Bjorn Bolinder</span>
        </p>
      </section>
      <section className='special-thanks'>
        <h3>
          SPECIAL THANKS AND<br />RECOGNITION TO
        </h3>
        <p>
          <b>
            Nicole Boutmy de Katzmann, Flávia Chi, Amy Harte, Margaret Yawman, Richard Stafford & Josh Walden
          </b>
        </p>
        <p>
          Our gratitude to The <b>American Tap Dance Foundation</b> & <b>Tony Waag</b> for their generous assistance with the tap flooring!
        </p>
        <p>
          <i>Thank you Bjorn Bolinder/Find The Light Photography, Lucas Chin, Stephanie & Michael Lobner, and Joshua McWhortor for volunteering your time and efforts!</i>
        </p>
      </section>
    </div>
  );
}

export default App;
