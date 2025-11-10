// src/components/NavbarComponent.jsx
// Barra de navegación principal de la aplicación

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import autoLogo from '../assets/auto.svg';
import NavLink from './ui/NavLink';
import Button from './ui/Button';

/**
 * Componente de navegación sticky que se mantiene fijo en la parte superior.
 * Muestra los enlaces principales y el contador de vehículos para posible compra.
 * Incluye menú hamburguesa responsivo para dispositivos móviles.
 *
 * @param {number} posiblesComprasCount - Cantidad de vehículos marcados para posible compra
 */
const NavbarComponent = ({ posiblesComprasCount }) => {
  // Estado para controlar si el menú móvil está abierto
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre de la tienda */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={cerrarMenu}
          >
            <img src={autoLogo} alt="NoCaro Car Logo" className="w-16 h-16" />
            <span className="text-2xl font-bold">NoCaro Car</span>
          </Link>

          {/* Botón hamburguesa (visible solo en móvil) */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {menuAbierto ? (
              // Icono X para cerrar
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Enlaces de navegación - Desktop (ocultos en móvil) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* 2. Usamos el componente. ¡Mucho más limpio! */}
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/catalogo">Catálogo</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>

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

        {/* Menú móvil desplegable */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-3">
            {/* 3. Reusamos el mismo componente con la otra variante */}
            <NavLink to="/" variant="mobile" onClick={cerrarMenu}>
              Inicio
            </NavLink>
            <NavLink to="/catalogo" variant="mobile" onClick={cerrarMenu}>
              Catálogo
            </NavLink>
            <NavLink to="/contacto" variant="mobile" onClick={cerrarMenu}>
              Contacto
            </NavLink>
            <Link
              to="/posibles-compras"
              onClick={cerrarMenu}
              className="flex items-center justify-between py-2 px-4 bg-primary-600 hover:bg-primary-500 rounded transition-colors duration-200 font-medium"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span>Posibles Compras</span>
              </span>
              {posiblesComprasCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
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