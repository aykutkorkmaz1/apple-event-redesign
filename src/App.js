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
            <span className="main-page-desc">Your new portable photography machine.</span>
             <div className='main-blue-button'>
              <span>Learn more</span>
            </div>
          </div>
      </div>

      <div className="main-iphonese">
          <div className="align-items">
            <img src={iphonese_logo} />
            <span className="main-page-desc">
              Superpowerful A15 Bionic chip. Superstar camera.<br/>
              Big-time battery life. All at an incredible price.
            </span>
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
            Everything that pros needs.
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
