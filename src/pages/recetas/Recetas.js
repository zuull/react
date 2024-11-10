import { useState, useEffect } from 'react';

// Componentes
import Cargando from "../../components/Cargando";
import Buscador from "./components/Buscador";
import TarjetaReceta from "./components/TarjetaReceta";

// Servicio
import {buscarRecetas} from "../../services/RecetasServicio";


const Recetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(false);

  const manejarBusqueda = async (consulta) => {
    setCargando(true);
    try {
      const datos = await buscarRecetas(consulta);
      setRecetas(datos.meals || []);
    } catch (error) {
      console.error('Error al buscar recetas:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    manejarBusqueda('');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Recetas</h2>
      <Buscador onChange={manejarBusqueda} />
      {cargando ? (
        <Cargando />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recetas.map((receta) => (
            <TarjetaReceta key={receta.idMeal} receta={receta} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recetas;