import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './components/registration/registration';
import Login from './components/Login/login';
import Capture from './components/Capture/capture';
import Regsuccess from './components/Regsucess/Regsucess';
import Admin from './components/Hospital Admin/admin';


function App() {
  return (
<>

<Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Registration/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/capture" element={<Capture />}/>
          <Route exact path="/success" element={<Regsuccess />}/>
          <Route exact path="/admin" element={<Admin />}/>
        </Routes>
      </div>
    </Router>
    
</>
  );
}

export default App;
