import './App.scss';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Welcome from './components/welcome/Welcome';
import Comida from './pages/comida/Comida';
import Visitar from './pages/visitar/Visitar';
import Ride from './pages/ride/Ride';
import Hermanar from './pages/hermanar/Hermanar';
import Elderes from './pages/elderes/Elderes';
import Hermanas from './pages/hermanas/Hermanas';

function App() {


  return (
  <Router>
    <div className='App'>
     
    <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/home" element={<Home />} />
    <Route path="/comida" element={<Comida />} />
    <Route path="/visitar" element={<Visitar />} />
    <Route path="/ride" element={<Ride />} />
    <Route path="/hermanar" element={<Hermanar />} />
    <Route path="/comida/elderes" element={<Elderes/>} />
    <Route path="/comida/hermanas" element={<Hermanas/>} />
    </Routes>
          
  

    </div>
  </Router>

   
  );
}

export default App;
