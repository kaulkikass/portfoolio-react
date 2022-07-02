import { Link } from 'react-router-dom'

function Avaleht() {
    return ( 
        <div className='main-link-list'>
            <div className='main-link'>
                <img className='main-link-image' src='/pilt5.jpg' />
                <p>Hello, I am Kaul Kristjan Kikas and this website is made to exercise React</p>
                <div className='kriips'></div>
                <div className='tehtudTööd'>
                <Link to='/courses' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='tehtudTöödContainer'>
                <img className='tehtudTöödPildid' src="/pilt2.svg" alt="" />
                <p>Work done related to USER DESIGN</p>
                </div>
                </Link>
                <Link to='/hobbies' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='tehtudTöödContainer'>
                <img className='tehtudTöödPildid' src="/pilt3.svg" alt="" />
                <p>Work done related to HOBBIES</p>
                </div>
                </Link>
                <Link to='/work' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='tehtudTöödContainer'>
                <img className='tehtudTöödPildid' src="/pilt4.svg" alt="" />
                <p className='tehtudTöödTekst'>Work done related to PHOTOSHOP</p>
                </div>
                </Link>
                </div>
            </div>
        </div>
     );
}

export default Avaleht;