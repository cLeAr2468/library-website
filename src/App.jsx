import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MissionVision from './pages/MissionVision'
import ServiceHours from './pages/ServiceHours'
import LibraryPersonnel from './pages/LibraryPersonnel'
import PoliciesRules from './pages/PoliciesRules'
import CitizensCharter from './pages/CitizensCharter'
import Linkages from './pages/Linkages'
import BookBorrowing from './pages/BookBorrowing'
import DigitalResources from './pages/DigitalResources'
import Database from './pages/Database'
import Repository from './pages/Repository'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/service-hours" element={<ServiceHours />} />
        <Route path="/library-personnel" element={<LibraryPersonnel />} />
        <Route path="/policies-rules" element={<PoliciesRules />} />
        <Route path="/citizens-charter" element={<CitizensCharter />} />
        <Route path="/linkages" element={<Linkages />} />
        <Route path="/book-borrowing" element={<BookBorrowing />} />
        <Route path="/digital-resources" element={<DigitalResources />} />
        <Route path="/database" element={<Database />} />
        <Route path="/repository" element={<Repository />} />
      </Route>
    </Routes>
  )
}

export default App