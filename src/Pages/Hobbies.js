import { Link } from 'react-router-dom'

function Hobbies() {
    return ( 
    <div>
        <div>Siin on minu hobide leht</div>
        <Link to='/'>
            <button>Mine tagasi</button>
        </Link>
    </div>
     );
}

export default Hobbies;