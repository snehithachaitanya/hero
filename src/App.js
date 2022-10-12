import './App.css';
import Idcard from './components/Idcard';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Llink from './Llink';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <br></br>
      <Routes>
      <Route path="Profile" element={<Idcard/>}/>
      <Route path="llink" element={<Llink/>}/>
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
