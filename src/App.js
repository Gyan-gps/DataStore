
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resister from './components/Resister';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resister" element={<Resister />} />
        <Route path="/updateperson/:id" element={<Edit />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
