import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
                <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;