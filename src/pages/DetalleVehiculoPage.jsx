// src/pages/DetalleVehiculoPage.jsx
// Página de detalle de un vehículo específico

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Página que muestra toda la información detallada de un vehículo.
 * Permite marcar/desmarcar el vehículo como posible compra.
 * 
 * @param {Array} vehiculos - Lista completa de vehículos
 * @param {Array} posiblesCompras - IDs de vehículos marcados como posible compra
 * @param {Function} onTogglePosibleCompra - Función para marcar/desmarcar posible compra
 */
const DetalleVehiculoPage = ({ vehiculos, posiblesCompras, onTogglePosibleCompra }) => {
  // Obtener el ID del vehículo desde la URL
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Buscar el vehículo por ID
  const vehiculo = vehiculos.find(v => v.id === parseInt(id));
  
  // Si no existe el vehículo, mostrar mensaje de error
  if (!vehiculo) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Vehículo no encontrado</h2>
        <p className="text-gray-600 mb-6">El vehículo que buscas no existe o fue eliminado.</p>
        <button onClick={() => navigate('/catalogo')} className="btn-primary">
          Volver al Catálogo
        </button>
      </div>
    );
  }
  
  // Verificar si está marcado como posible compra
  const esPosibleCompra = posiblesCompras.includes(vehiculo.id);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Botón volver */}
      <button 
        onClick={() => navigate('/catalogo')}
        className="btn-secondary mb-6 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
        </svg>
        <span>Volver al Catálogo</span>
      </button>

      {/* Contenedor principal con imagen y detalles */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna izquierda: Imagen */}
          <div className="relative">
            <img 
              src={vehiculo.imagen} 
              alt={`${vehiculo.marca} ${vehiculo.modelo}`}
              className="w-full h-96 object-cover"
            />
            
            {/* Badge de posible compra */}
            {esPosibleCompra && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                Marcado para Posible Compra
              </div>
            )}
            
            {/* Badge del tipo */}
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-full font-bold">
              {vehiculo.tipo}
            </div>
          </div>

          {/* Columna derecha: Información */}
          <div className="p-8">
            {/* Título */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {vehiculo.marca} {vehiculo.modelo}
            </h1>
            
            {/* Precio */}
            <div className="text-4xl font-bold text-primary-600 mb-6">
              ${vehiculo.precio.toLocaleString()}
            </div>

            {/* Descripción */}
            <p className="text-gray-600 mb-8 text-lg">
              {vehiculo.descripcion}
            </p>

            {/* Especificaciones técnicas */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Especificaciones</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Año</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.año}</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Kilometraje</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.kilometraje.toLocaleString()} km</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Transmisión</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.transmision}</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Combustible</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.combustible}</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Color</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.color}</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Tipo</p>
                  <p className="text-xl font-bold text-gray-900">{vehiculo.tipo}</p>
                </div>
              </div>
            </div>

            {/* Botón para marcar/desmarcar como posible compra */}
            <button
              onClick={() => onTogglePosibleCompra(vehiculo.id)}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                esPosibleCompra
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {esPosibleCompra ? (
                <>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>Quitar de Posibles Compras</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                  <span>Marcar como Posible Compra</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleVehiculoPage;