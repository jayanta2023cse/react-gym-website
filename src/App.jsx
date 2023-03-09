import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import './index.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
//     <BrowserRouter>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='trainers' element={<Trainers/>} />
        <Route path='plans' element={<Plans/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
//      </BrowserRouter>
          <HashRouter/>
  );
}

export default App;
