import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import JournalPage from './pages/JournalPage';
import Organization from './pages/OrganizationPage';
import Otdel from './pages/OtdelPage';
import Worker from './pages/WorkerPage';
import Document from './pages/DocumentPage';
import NavBar from './components/NavComponent';

function App() {
  return (
    <Router>
      <div >
        <NavBar />
      </div>
      <Routes>
        <Route path='/document' element={<Document />} />
        <Route path='/journal' element={<JournalPage />} />
        <Route path='/organization' element={<Organization />} />
        <Route path='/otdel' element={<Otdel />} />
        <Route path='/worker' element={<Worker />} />
      </Routes>
    </Router>
  );
}

export default App;
