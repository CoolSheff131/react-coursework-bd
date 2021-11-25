import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Journal from './pages/Journal';
import Organization from './pages/Organization';
import Otdel from './pages/Otdel';
import Worker from './pages/Worker';
import Document from './pages/Document';

function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/document">document</Link>
            </li>
            <li>
              <Link to="/journal">journal</Link>
            </li>
            <li>
              <Link to="/organization">organization</Link>
            </li>
            <li>
              <Link to="/otdel">otdel</Link>
            </li>
            <li>
              <Link to="/worker">worker</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/document' element={<Document />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/organization' element={<Organization />} />
        <Route path='/otdel' element={<Otdel />} />
        <Route path='/worker' element={<Worker />} />
      </Routes>
    </Router>
  );
}

export default App;
