import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './components/Screen/HomeScreen';
import EventScreen from './components/Screen/EventScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import EventDetail from "./components/Screen/PageDetail/EventDertail"
import NotFound from './components/Error/404';
import GuestInfo from './components/GuestInfo';
import Ticket from './components/Screen/ETicket';
import Register from './components/Screen/Form/Register';
import Login from './components/Screen/Form/Login';
import PaymentPage from './components/Screen/PaymentScreen';
import TestScreen from './components/Screen/TestScreen';
import NavbarBottom from './components/NavBarBottom';
import 'antd/dist/antd.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



function App() {
  return (
    <div className="bg-white w-full h-full scroll-smooth">
      <BrowserView>
        <Navbar />
      </BrowserView>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/event' element={<EventScreen />}></Route>
        <Route path='/event-detail' element={<EventDetail />}></Route>
        <Route path='/test' element={<TestScreen />}></Route>
        <Route path='/event/guest-info' element={<GuestInfo />}></Route>
        <Route path='/ticket' element={<Ticket />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/payment' element={<PaymentPage />}></Route>
      </Routes>
      <MobileView>
        <NavbarBottom />
      </MobileView>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
