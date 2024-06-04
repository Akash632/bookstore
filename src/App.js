import './App.css';
import Home from './components/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books/Books.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
      </Routes>
    </div>
  );
}

export default App;
