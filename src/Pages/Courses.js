import { Link } from 'react-router-dom'

function Courses() {
    return ( 
    <div>
        <div>Siin on minu läbitud kursused</div>
        <Link to='/'>
            <button>Mine tagasi</button>
        </Link>
    </div>
     );
}

export default Courses;