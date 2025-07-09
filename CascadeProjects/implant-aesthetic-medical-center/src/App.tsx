import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ContactFooter } from './components/ContactFooter';
import { Home } from './pages/Home';
import { DentalImplants } from './pages/DentalImplants';
import { DentalServices } from './pages/DentalServices';
import { DermatologyServices } from './pages/DermatologyServices';
import { AboutUs } from './pages/AboutUs';
import { PatientResources } from './pages/PatientResources';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dental-implants" element={<DentalImplants />} />
            <Route path="/dental-services" element={<DentalServices />} />
            <Route path="/dermatology-services" element={<DermatologyServices />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/patient-resources" element={<PatientResources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
