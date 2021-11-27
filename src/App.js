//Critcal
import {Route, Routes} from 'react-router-dom';

import './App.scss'

//Components
import Navbar from './components/Navbar';

//Pages
import MyWork from './pages/MyWork';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MyWork />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
