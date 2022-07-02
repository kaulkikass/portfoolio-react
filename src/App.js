
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import Courses from './Pages/Courses';
import Hobbies from './Pages/Hobbies';
import Work from './Pages/Work';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={ <Avaleht /> } />
          <Route path='courses' element={ <Courses /> } />
          <Route path='hobbies' element={ <Hobbies /> } />
          <Route path='work' element={ <Work /> } />
        </Routes>
      </div>
  );
}

export default App;
