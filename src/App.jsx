
import './App.css'
import { Routes, Route } from "react-router-dom";
import Booking from './components/Booking'
import BookingRes from './pages/BookingRes';
import Header from './components/Header';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Booking/>}/>
    <Route path='/bookingPage' element={<BookingRes/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
