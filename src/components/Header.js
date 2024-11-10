import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple-200 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-purple-800 text-2xl font-bold">Zully Recetas</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-purple-700 hover:text-purple-900 transition-colors">Inicio</Link></li>
          <li><Link to="/recetas" className="text-purple-700 hover:text-purple-900 transition-colors">Recetas</Link></li>
          <li><Link to="/acerca-de-mi" className="text-purple-700 hover:text-purple-900 transition-colors">Acerca de mi</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;