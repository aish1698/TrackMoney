import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import 'antd/dist/antd';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
