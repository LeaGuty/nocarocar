// src/components/NavbarComponent.jsx
// Barra de navegación principal de la aplicación

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de navegación sticky que se mantiene fijo en la parte superior.
 * Muestra los enlaces principales y el contador de vehículos para posible compra.
 * 
 * @param {number} posiblesComprasCount - Cantidad de vehículos marcados para posible compra
 */
const NavbarComponent = ({ posiblesComprasCount }) => {
  return (
    <nav className="bg-primary-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre de la tienda */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
            </svg>
            <span className="text-2xl font-bold">NoCaro Car</span>
          </Link>

          {/* Enlaces de navegación */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="hover:text-primary-200 transition-colors duration-200 font-medium"
            >
              Inicio
            </Link>
            <Link 
              to="/catalogo" 
              className="hover:text-primary-200 transition-colors duration-200 font-medium"
            >
              Catálogo
            </Link>
            
            {/* Botón de posibles compras con badge de contador */}
            <Link 
              to="/posibles-compras" 
              className="relative btn-secondary flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              <span>Posibles Compras</span>
              {/* Badge que muestra el número de vehículos marcados */}
              {posiblesComprasCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {posiblesComprasCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;