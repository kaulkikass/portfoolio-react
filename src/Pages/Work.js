import { Link } from 'react-router-dom'

function Work() {
    return ( 
    <div>
        <div>Siin on minu tehtud tööd</div>
        <Link to='/'>
            <button>Mine tagasi</button>
        </Link>
    </div>
     );
}

export default Work;