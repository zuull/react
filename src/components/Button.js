import {Link} from "react-router-dom";

const Button = ({titulo, href}) => {

  if (href) {
    return (
      <Link to={href} className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
        Ver Recetas
      </Link>
    );
  }

  return (
    <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
      {titulo}
    </button>
  );
};

export default Button;