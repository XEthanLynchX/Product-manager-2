import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/DisplayOneProduct';



const App = () => {
  return ( 
  <BrowserRouter>
    <div>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<OneProduct/>} path="/products/:id" />
      </Routes>
    </div>
      </BrowserRouter>
    
  );
}

export default App;