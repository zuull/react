import React from 'react';

const TarjetaReceta = ({ receta }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={receta?.strMealThumb} alt={receta?.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">{receta?.strMeal}</h3>
        <p className="text-purple-600">Categoría: {receta?.strCategory}</p>
        <p className="text-purple-600">Origen: {receta?.strArea}</p>
      </div>
    </div>
  );
};

export default TarjetaReceta;