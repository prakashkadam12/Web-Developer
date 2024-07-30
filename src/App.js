import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#000000]">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
