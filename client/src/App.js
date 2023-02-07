import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import 'antd/dist/antd';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

    <Route path='/' element={<Home/>}/>
    

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
