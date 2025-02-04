import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './Body';
import About from './pages/About';
import Overview from './PerformanceTester/Overview';
import Register from './PerformanceTester/Register.js';
import Login from './PerformanceTester/Login.js';
import MainView from './PerformanceTester/MainView.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import MyMap from './Map';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/overview' element={<Overview/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<MainView/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;


// const App = () => {
//   return (
//     <div>

//       <BrowserRouter>
//       <div>
     
//       </div>
//       <div>
//       <Header/>
//       </div>
//       <div>
//         <Body/>
//       </div>

      
      
//       <Routes>
//         <Route path='/' element={<Home/>}/>
        
//       </Routes>
//       </BrowserRouter>
       
//     </div>
//   )
// }

// export default App;

