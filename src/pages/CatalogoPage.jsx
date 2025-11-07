// src/pages/CatalogoPage.jsx
// Página del catálogo con filtros y lista de vehículos

import React, { useState } from 'react';
import VehiculoCard from '../components/VehiculoCard';

/**
 * Página del catálogo que muestra todos los vehículos disponibles.
 * Incluye filtros por búsqueda, marca, tipo, precio y año.
 * Permite agregar vehículos mediante un formulario.
 * 
 * @param {Array} vehiculos - Lista completa de vehículos
 * @param {Array} posiblesCompras - IDs de vehículos marcados como posible compra
 * @param {Function} onAgregarVehiculo - Función para agregar un nuevo vehículo
 * @param {Function} onToggleFormulario - Función para mostrar/ocultar formulario
 */
const CatalogoPage = ({ vehiculos, posiblesCompras, onAgregarVehiculo, onToggleFormulario }) => {
  // Estados locales para los filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [marcaFiltro, setMarcaFiltro] = useState('Todas');
  const [tipoFiltro, setTipoFiltro] = useState('Todos');
  const [precioMaxFiltro, setPrecioMaxFiltro] = useState('');
  const [añoMinFiltro, setAñoMinFiltro] = useState('');

  // Obtener marcas únicas de los vehículos
  const marcasUnicas = ['Todas', ...new Set(vehiculos.map(v => v.marca))];
  
  // Obtener tipos únicos de vehículos
  const tiposUnicos = ['Todos', ...new Set(vehiculos.map(v => v.tipo))];

  // Filtrar vehículos según todos los criterios
  const vehiculosFiltrados = vehiculos.filter((vehiculo) => {
    // Filtro por búsqueda (marca o modelo)
    const matchesSearch = vehiculo.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por marca
    const matchesMarca = marcaFiltro === 'Todas' || vehiculo.marca === marcaFiltro;
    
    // Filtro por tipo
    const matchesTipo = tipoFiltro === 'Todos' || vehiculo.tipo === tipoFiltro;
    
    // Filtro por precio máximo
    const matchesPrecio = !precioMaxFiltro || vehiculo.precio <= Number(precioMaxFiltro);
    
    // Filtro por año mínimo
    const matchesAño = !añoMinFiltro || vehiculo.año >= Number(añoMinFiltro);
    
    // Retornar true solo si cumple todos los filtros
    return matchesSearch && matchesMarca && matchesTipo && matchesPrecio && matchesAño;
  });

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setSearchTerm('');
    setMarcaFiltro('Todas');
    setTipoFiltro('Todos');
    setPrecioMaxFiltro('');
    setAñoMinFiltro('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Encabezado con título y botón para agregar vehículo */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Catálogo de Vehículos</h1>
        <button 
          onClick={onToggleFormulario}
          className="btn-primary flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
          </svg>
          <span>Agregar Vehículo</span>
        </button>
      </div>

      {/* Panel de filtros */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Filtros</h2>
          <button 
            onClick={limpiarFiltros}
            className="btn-secondary text-sm"
          >
            Limpiar Filtros
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Filtro por búsqueda */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar
            </label>
            <input
              type="text"
              placeholder="Marca o modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Filtro por marca */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marca
            </label>
            <select
              value={marcaFiltro}
              onChange={(e) => setMarcaFiltro(e.target.value)}
              className="input-field"
            >
              {marcasUnicas.map((marca) => (
                <option key={marca} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo
            </label>
            <select
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
              className="input-field"
            >
              {tiposUnicos.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por precio máximo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Precio Máximo
            </label>
            <input
              type="number"
              placeholder="Ej: 50000"
              value={precioMaxFiltro}
              onChange={(e) => setPrecioMaxFiltro(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Filtro por año mínimo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Año Mínimo
            </label>
            <input
              type="number"
              placeholder="Ej: 2020"
              value={añoMinFiltro}
              onChange={(e) => setAñoMinFiltro(e.target.value)}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Contador de resultados */}
      <div className="mb-6">
        <p className="text-gray-600">
          Mostrando <span className="font-bold text-primary-600">{vehiculosFiltrados.length}</span> de {vehiculos.length} vehículos
        </p>
      </div>

      {/* Grid de vehículos */}
      {vehiculosFiltrados.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiculosFiltrados.map((vehiculo) => (
            <VehiculoCard
              key={vehiculo.id}
              vehiculo={vehiculo}
              esPosibleCompra={posiblesCompras.includes(vehiculo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No se encontraron vehículos
          </h3>
          <p className="text-gray-600 mb-4">
            Intenta ajustar los filtros o buscar con otros términos
          </p>
          <button onClick={limpiarFiltros} className="btn-primary">
            Limpiar Filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogoPage;