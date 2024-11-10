import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from "./components/Header";
import Home from './pages/home/Home';
import Recetas from "./pages/recetas/Recetas";
import AcercaDeMi from "./pages/acerca-de-mi/AcercaDeMi";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recetas' element={<Recetas/>}/>
            <Route path='/acerca-de-mi' element={<AcercaDeMi/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
);
}

export default App;
