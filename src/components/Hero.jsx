// src/components/Hero.jsx
// Componente de encabezado visual con imagen de fondo

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Hero que muestra un banner atractivo con llamado a la acción.
 * Se usa típicamente en la página de inicio.
 * 
 * @param {string} title - Título principal del hero
 * @param {string} subtitle - Subtítulo o descripción
 * @param {string} buttonText - Texto del botón de acción
 * @param {string} buttonLink - Ruta a la que dirige el botón
 */
const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      {/* Imagen de fondo con overlay oscuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200)',
          opacity: 0.3
        }}
      />
      
      {/* Contenido del hero */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
            {subtitle}
          </p>
          
          {/* Botón de llamado a la acción */}
          <Link 
            to={buttonLink}
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      
      {/* Decoración con forma ondulada */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;