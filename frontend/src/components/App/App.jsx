import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from '../Aside/components/Map/Map';
import Advertising from '../Aside/components/Advertising/Advertising';
import Calendar from '../Aside/components/Calendar/Calendar';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/adverstising" element={<Advertising />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
