import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';

import iphone13pro_logo from './images/logos_with_apple/no_sub/iphone13pro.svg';
import iphonese_logo from './images/logos_with_apple/no_sub/iphone_se.svg';
import macbookpro_logo from './images/logos_with_apple/no_sub/mac.svg';
import ipad_logo from './images/logos_with_apple/no_sub/ipad.svg';

function App() {
  return (
    <div className="App">
      <Navbar />

    <div className='iphone13pro-content'>
      <img src={iphone13pro_logo} />
      <div className='iphone13pro_slogan'>Oh. So. Pro.</div>
      <div className='description'>From $42.62/mo. for 24 mo. or $999 before trade-in</div>
      <div className='blue-button'>
        <span>Learn more</span>
      </div>
    </div>

    <div className='iphonese-content'>
      <div className='iphone-image'></div>
      <div className='iphone_info'>
        <img src={iphonese_logo} />
        <div className='iphonese_slogan'>
          <span>Superpowerful A15 Bionic chip.</span> <br />
          <span>Superstar camera.</span> <br />
          <span>Big-time battery.</span> <br />
          <span>All at an incredible price.</span>
        </div>
        <div className='iphonese_buttons'>
          <div className='bordered-button'>
            <span>Learn more</span>
          </div>
          <div className='bordered-button'>
            <span>View pricing</span>
          </div>
        </div>
      </div>
    </div>

    <div className='macbookpro-content'>
      <img src={macbookpro_logo} />
      <div className='macbookpro_slogan'>Supercharged for pros.</div>
      <div className='macbookpro_description'>
        The most powerful MacBook Pro ever is here.
        With the blazing-fast M1 Pro or M1 Max chip you get groundbreaking performance and amazing battery life.
        Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.
        The first notebook of its kind, this MacBook Pro is a beast.
      </div>
      <div className='macbookpro_buttons'>
          <div className='bordered-button'>
            <span>Learn more</span>
          </div>
          <div className='bordered-button'>
            <span>View pricing</span>
          </div>
        </div>
    </div>

    <div className='ipad-content'>
      <img src={ipad_logo} />
      <div className='ipad_slogan'>
          <span>Light. Bright.</span> <br />
          <span>Full of might.</span> <br />
          <span>Now supercharged by Apple M1.</span>
      </div>
      <div className='ipad_buttons'>
          <div className='bordered-button'>
            <span>Learn more</span>
          </div>
          <div className='bordered-button'>
            <span>View pricing</span>
          </div>
        </div>
    </div>

    </div>
  );
}

export default App;
