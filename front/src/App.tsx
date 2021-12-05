import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import JournalsPage from './pages/JournalsPage';
import OrganizationsPage from './pages/OrganizationsPage';
import OtdelsPage from './pages/OtdelsPage';
import WorkersPage from './pages/WorkersPage';
import DocumentsPage from './pages/DocumentsPage';
import NavBar from './components/NavComponent';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <Router>
      <div className="mb-4">
        <NavBar />
      </div>
      <Routes>
        <Route path='/document' element={<DocumentsPage />} />
        <Route path='/journal' element={<JournalsPage />} />
        <Route path='/organization' element={<OrganizationsPage />} />
        <Route path='/otdel' element={<OtdelsPage />} />
        <Route path='/worker' element={<WorkersPage />} />
        <Route path='/report' element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
