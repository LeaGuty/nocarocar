// src/pages/CatalogoPage.jsx
// Página del catálogo con filtros y lista de vehículos

import React, { useState } from 'react';
import VehiculoCard from '../components/VehiculoCard';
import { Container, Card, Input, Button, Grid, Badge } from '../components/ui';

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
    <Container maxWidth="2xl" padding="lg" className="py-8">
      {/* Encabezado con título y botón para agregar vehículo */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Catálogo de Vehículos</h1>
        <Button variant="primary" onClick={onToggleFormulario}>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
          </svg>
          Agregar Vehículo
        </Button>
      </div>

      {/* Panel de filtros */}
      <Card padding="lg" className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Filtros</h2>
          <Button variant="secondary" size="sm" onClick={limpiarFiltros}>
            Limpiar Filtros
          </Button>
        </div>

        <Grid cols="1" gap="md" responsive={{ sm: '1', md: '2', lg: '5' }}>
          {/* Filtro por búsqueda */}
          <Input
            label="Buscar"
            type="text"
            placeholder="Marca o modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filtro por marca */}
          <Input.Select
            label="Marca"
            value={marcaFiltro}
            onChange={(e) => setMarcaFiltro(e.target.value)}
            options={marcasUnicas.map(marca => ({ value: marca, label: marca }))}
          />

          {/* Filtro por tipo */}
          <Input.Select
            label="Tipo"
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
            options={tiposUnicos.map(tipo => ({ value: tipo, label: tipo }))}
          />

          {/* Filtro por precio máximo */}
          <Input
            label="Precio Máximo"
            type="number"
            placeholder="Ej: 50000000"
            value={precioMaxFiltro}
            onChange={(e) => setPrecioMaxFiltro(e.target.value)}
          />

          {/* Filtro por año mínimo */}
          <Input
            label="Año Mínimo"
            type="number"
            placeholder="Ej: 2020"
            value={añoMinFiltro}
            onChange={(e) => setAñoMinFiltro(e.target.value)}
          />
        </Grid>
      </Card>

      {/* Contador de resultados */}
      <div className="mb-6">
        <p className="text-gray-600">
          Mostrando <Badge variant="primary">{vehiculosFiltrados.length}</Badge> de {vehiculos.length} vehículos
        </p>
      </div>

      {/* Grid de vehículos */}
      {vehiculosFiltrados.length > 0 ? (
        <Grid cols="1" gap="lg" responsive={{ sm: '1', md: '2', lg: '3' }}>
          {vehiculosFiltrados.map((vehiculo) => (
            <VehiculoCard
              key={vehiculo.id}
              vehiculo={vehiculo}
              esPosibleCompra={posiblesCompras.includes(vehiculo.id)}
            />
          ))}
        </Grid>
      ) : (
        <Card padding="lg" className="text-center py-16">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No se encontraron vehículos
          </h3>
          <p className="text-gray-600 mb-4">
            Intenta ajustar los filtros o buscar con otros términos
          </p>
          <Button variant="primary" onClick={limpiarFiltros}>
            Limpiar Filtros
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default CatalogoPage;