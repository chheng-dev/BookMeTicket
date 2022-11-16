import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomeScreen from './components/Screen/HomeScreen';
import EventScreen from './components/Screen/EventScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import TestScreen from './components/Screen/TestScreen';



function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/events' element={<EventScreen/>}></Route>
        <Route path='/test' element={<TestScreen/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
