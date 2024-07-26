import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Home/Footer';
import Header from './Component/Home/Header';
import Main from './Component/Home/Main';
import DangNhap from './Component/Login/DangNhap'
import SidebarDoctor from './Component/Doctor/SidebarDoctor';
import InformationPatient from './Component/Doctor/InformationPatient';
import HeaderDoctor from './Component/Doctor/HeaderDoctor';





function App() {
  return (
    <>
    {/* <Router>
      <Header></Header>
       <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='Login' element={<DangNhap></DangNhap>}></Route>
      </Routes>
      <Footer></Footer>
    </Router> */}
    {/* <div className='container-doctor'>
    <SidebarDoctor></SidebarDoctor>
    <HeaderDoctor></HeaderDoctor>
    </div> */}
    <InformationPatient></InformationPatient>
    
    </>
  );
}
export default App;
