// src/pages/DetalleVehiculoPage.jsx
// Página de detalle de un vehículo específico

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Badge, Grid } from '../components/ui';

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
      <Container maxWidth="xl" padding="lg" className="py-16 text-center">
        <Card padding="lg">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vehículo no encontrado</h2>
          <p className="text-gray-600 mb-6">El vehículo que buscas no existe o fue eliminado.</p>
          <Button variant="primary" onClick={() => navigate('/catalogo')}>
            Volver al Catálogo
          </Button>
        </Card>
      </Container>
    );
  }

  // Verificar si está marcado como posible compra
  const esPosibleCompra = posiblesCompras.includes(vehiculo.id);

  return (
    <Container maxWidth="2xl" padding="lg" className="py-4 md:py-8">
      {/* Botón volver */}
      <Button variant="secondary" className="mb-4 md:mb-6" onClick={() => navigate('/catalogo')}>
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
        </svg>
        Volver al Catálogo
      </Button>

      {/* Contenedor principal con imagen y detalles */}
      <Card padding="none" className="overflow-hidden">
        <Grid cols="1" gap="none" responsive={{ md: '2' }}>
          {/* Columna izquierda: Imagen */}
          <div className="relative">
            <img
              src={vehiculo.imagen}
              alt={`${vehiculo.marca} ${vehiculo.modelo}`}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[600px] object-cover"
            />

            {/* Badge de posible compra */}
            {esPosibleCompra && (
              <div className="absolute top-2 right-2 md:top-4 md:right-4">
                <Badge variant="success" size="lg">
                  Marcado para Posible Compra
                </Badge>
              </div>
            )}

            {/* Badge del tipo */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4">
              <Badge variant="primary" size="lg">
                {vehiculo.tipo}
              </Badge>
            </div>
          </div>

          {/* Columna derecha: Información */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Título */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {vehiculo.marca} {vehiculo.modelo}
            </h1>

            {/* Precio */}
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-4 md:mb-6">
              ${vehiculo.precio.toLocaleString()}
            </div>

            {/* Descripción */}
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              {vehiculo.descripcion}
            </p>

            {/* Especificaciones técnicas */}
            <div className="space-y-4 mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Especificaciones</h2>

              <Grid cols="1" gap="md" responsive={{ sm: '2' }}>
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Año</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.año}</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Kilometraje</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.kilometraje.toLocaleString()} km</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Transmisión</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.transmision}</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Combustible</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.combustible}</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Color</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.color}</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500">Tipo</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{vehiculo.tipo}</p>
                </div>
              </Grid>
            </div>

            {/* Botón para marcar/desmarcar como posible compra */}
            <Button
              variant={esPosibleCompra ? "danger" : "success"}
              size="lg"
              fullWidth
              onClick={() => onTogglePosibleCompra(vehiculo.id)}
            >
              {esPosibleCompra ? (
                <>
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  Quitar de Posibles Compras
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                  Marcar como Posible Compra
                </>
              )}
            </Button>
          </div>
        </Grid>
      </Card>
    </Container>
  );
};

export default DetalleVehiculoPage;