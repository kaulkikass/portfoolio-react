
import './App.css';

function App() {
  return (
    <div className='main-link-list'>
        <div className='main-link'>
              <img className='main-link-image' src='/pilt.jpg' />
              <p>Hello, I am Kaul Kristjan Kikas and this website is made to exercise React</p>
              <div className='kriips'></div>
              <div className='tehtudTööd'>
              <div className='tehtudTöödContainer'>
              <img className='tehtudTöödPildid' src="/pilt2.jpg" alt="" />
              <p>Work done related to USER DESIGN</p>
              </div>
              <div className='tehtudTöödContainer'>
              <img className='tehtudTöödPildid' src="/pilt3.jpg" alt="" />
              <p>Work done related to HOBBIES</p>
              </div>
              <div className='tehtudTöödContainer'>
              <img className='tehtudTöödPildid' src="/pilt4.jpg" alt="" />
              <p className='tehtudTöödTekst'>Work done related to PHOTOSHOP</p>
              </div>
              </div>
        </div>
    </div>

  );
}

export default App;
