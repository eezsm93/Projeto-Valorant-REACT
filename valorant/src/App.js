
import './App.css';
import Home from './Pages/Home/Home'
import Agents from './Pages/Agents/Agents'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="agents/*" element={<Agents/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
