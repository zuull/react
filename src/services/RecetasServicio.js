import axios from 'axios';

// URL base de la API de TheMealDB
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Función para buscar recetas en la API
export const buscarRecetas = async (consulta) => {
  try {
    // Realiza una petición GET a la API con la consulta proporcionada
    const respuesta = await axios.get(`${API_BASE_URL}/search.php?s=${consulta}`);
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener recetas:', error);
    throw error;
  }
};