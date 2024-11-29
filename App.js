import './App.css';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';
import Cel from './Cel';
import Far from './Far';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cel />}></Route>
        <Route path='/cel' element={<Cel />}></Route>
        <Route path='/far' element={<Far />}></Route>
      </Routes>
      
      </div>

  );
}

export default App;
