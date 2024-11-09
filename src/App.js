import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
