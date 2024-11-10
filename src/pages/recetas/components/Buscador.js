import {useState} from "react";

const Buscador = ({ onChange }) => {
  const [consulta, setConsulta] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    onChange(consulta);
  };


  return (
    <form onSubmit={manejarEnvio} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Buscar recetas..."
          className="w-full p-2 border border-purple-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded-r hover:bg-purple-600 transition-colors"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Buscador;