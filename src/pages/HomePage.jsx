// src/pages/HomePage.jsx
// Página de inicio con hero y presentación

import React from 'react';
import Hero from '../components/Hero';

/**
 * Página principal que muestra el hero y contenido de bienvenida.
 * Es la primera vista que ven los usuarios al entrar al sitio.
 */
const HomePage = () => {
  return (
    <div>
      {/* Componente Hero con título, subtítulo y botón */}
      <Hero
        title="NoCaro Car"
        subtitle="Encuentra el vehículo de tus sueños al mejor precio del mercado"
        buttonText="Ver Catálogo Completo"
        buttonLink="/catalogo"
      />

      {/* Sección de características */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué elegirnos?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Característica 1 */}
          <div className="text-center p-6">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Amplia Variedad</h3>
            <p className="text-gray-600">
              Desde sedanes económicos hasta SUVs de lujo. Tenemos el vehículo perfecto para ti.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="text-center p-6">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600">
              Todos nuestros vehículos pasan por rigurosas inspecciones de calidad.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="text-center p-6">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mejores Precios</h3>
            <p className="text-gray-600">
              Precios competitivos y opciones de financiamiento flexibles para tu comodidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;