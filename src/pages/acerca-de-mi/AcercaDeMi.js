import React from 'react';

const AcercaDeMi = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Acerca de Zully Recetas</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="mb-4 text-purple-700">
          Zully Recetas es una aplicación web que te permite descubrir y explorar deliciosas recetas de todo el mundo.
          Utilizamos la API de TheMealDB para traerte una amplia variedad de recetas.
        </p>
        <p className="text-purple-700">
          Esta aplicación fue creada como un proyecto de práctica para demostrar el uso de React, React Router,
          y la integración de APIs externas.
        </p>
      </div>
    </div>
  );
};

export default AcercaDeMi;