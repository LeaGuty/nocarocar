// src/components/VehiculoCard.jsx
// Tarjeta individual que muestra la información de un vehículo

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente que renderiza una tarjeta con la información básica de un vehículo.
 * Incluye imagen, detalles principales y botón para ver más información.
 * 
 * @param {Object} vehiculo - Objeto con los datos del vehículo
 * @param {boolean} esPosibleCompra - Indica si el vehículo está marcado para posible compra
 */
const VehiculoCard = ({ vehiculo, esPosibleCompra = false }) => {
  return (
    <div className="card">
      {/* Contenedor de la imagen */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vehiculo.imagen} 
          alt={`${vehiculo.marca} ${vehiculo.modelo}`}
          className="w-full h-full object-cover"
        />
        
        {/* Badge si está marcado como posible compra */}
        {esPosibleCompra && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Posible Compra
          </div>
        )}
        
        {/* Badge del tipo de vehículo */}
        <div className="absolute top-2 left-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {vehiculo.tipo}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        {/* Título con marca y modelo */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {vehiculo.marca} {vehiculo.modelo}
        </h3>
        
        {/* Información en dos columnas */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            Año: {vehiculo.año}
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            {vehiculo.kilometraje.toLocaleString()} km
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
            </svg>
            {vehiculo.transmision}
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
            </svg>
            {vehiculo.combustible}
          </div>
        </div>

        {/* Precio destacado */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-primary-700">
            ${vehiculo.precio.toLocaleString()}
          </span>
          
          {/* Botón para ver detalles */}
          <Link 
            to={`/vehiculo/${vehiculo.id}`}
            className="btn-primary text-sm"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehiculoCard;