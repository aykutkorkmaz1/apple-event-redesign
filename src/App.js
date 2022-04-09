import logo from './logo.svg';
import './styles/App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import iphone13pro_logo from './images/logos_with_apple/no_sub/iphone13pro.svg';
import iphonese_logo from './images/logos_with_apple/no_sub/iphone_se.svg';
import macbookpro_logo from './images/logos_with_apple/no_sub/mac.svg';
import ipad_logo from './images/logos_with_apple/no_sub/ipad_air_wh.svg';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-iphone13pro">
          <div className="align-items">
            <img src={iphone13pro_logo} />
            <span className="main-page-slogan">Oh. So. Pro.</span>
            <span className="main-page-desc">From $42.62/mo for 24 mo. or $999 before trade-in.</span>
             <div className='main-blue-button'>
              <span>Learn more</span>
            </div>
          </div>
      </div>

      <div className="main-iphonese">
          <div className="align-items">
            <img src={iphonese_logo} />
            <span className="main-page-slogan">Hercules in your pocket.</span>
            <span className="main-page-desc">Just starting from $429.</span>
             <div className='main-blue-button'>
              <span>Learn more</span>
            </div>
          </div>
      </div>

      <div className="main-macbookpro">
          <div className="align-items">
            <img src={macbookpro_logo} />
            <span className="main-page-slogan">Supercharged for pros.</span>
            <span className="main-page-desc">
            The most powerful MacBook Pro ever is here.
            With the blazing-fast M1 Pro or M1 Max chip you get groundbreaking performance and amazing battery life.
            Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook,
            and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.
            </span>
             <div className='main-blue-button'>
              <span>Learn more</span>
            </div>
          </div>
      </div>

      <div className="main-ipad">
          <div className="align-items">
            <img src={ipad_logo} />
            <span className="main-page-slogan-ipad">Light. Bright. Full of might.</span>
            <span className="main-page-desc-ipad">
            Now powered by Apple M1 chip.
            </span>
             <div className='main-blue-button'>
              <span>Learn more</span>
            </div>
          </div>
      </div>

      <div className='main-box-2'>
        <div className='main-mac-display'>

        </div>
      </div>

    <Footer />      

    </div>
  );
}

export default App;
