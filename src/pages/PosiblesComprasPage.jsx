// src/pages/PosiblesComprasPage.jsx
// Página que muestra los vehículos marcados como posible compra

import React from 'react';
import { useNavigate } from 'react-router-dom';
import VehiculoCard from '../components/VehiculoCard';
import { Container, Card, Input, Button, Grid, Badge } from '../components/ui'; 
import { Link } from 'react-router-dom';
/**
 * Página que lista todos los vehículos que el usuario marcó como posible compra.
 * Permite desmarcarlos para que vuelvan al inventario general.
 * 
 * @param {Array} vehiculos - Lista completa de vehículos
 * @param {Array} posiblesCompras - IDs de vehículos marcados como posible compra
 * @param {Function} onTogglePosibleCompra - Función para marcar/desmarcar posible compra
 */
const PosiblesComprasPage = ({ vehiculos, posiblesCompras, onTogglePosibleCompra }) => {
  const navigate = useNavigate();
  
  // Filtrar solo los vehículos que están en posibles compras
  const vehiculosPosiblesCompras = vehiculos.filter(v => 
    posiblesCompras.includes(v.id)
  );

  // Calcular el total de todos los vehículos marcados
  const totalPrecio = vehiculosPosiblesCompras.reduce((sum, v) => sum + v.precio, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Vehículos para Posible Compra
        </h1>
        <p className="text-gray-600 text-lg">
          Aquí puedes ver todos los vehículos que has marcado como posible compra
        </p>
      </div>

      {/* Si hay vehículos marcados */}
      {vehiculosPosiblesCompras.length > 0 ? (
        <>
          {/* Panel de resumen */}
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 mb-1">Total de vehículos seleccionados</p>
                <p className="text-3xl font-bold text-primary-600">
                  {vehiculosPosiblesCompras.length}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 mb-1">Valor total estimado</p>
                <p className="text-3xl font-bold text-primary-600">
                  ${totalPrecio.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Lista de vehículos */}
          <div className="space-y-6">
            {vehiculosPosiblesCompras.map((vehiculo) => (
              <div key={vehiculo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  {/* Imagen del vehículo */}
                  <div className="md:w-1/3">
                    <img 
                      src={vehiculo.imagen} 
                      alt={`${vehiculo.marca} ${vehiculo.modelo}`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Información del vehículo */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {vehiculo.marca} {vehiculo.modelo}
                        </h3>
                        <p className="text-primary-600 font-bold text-xl">
                          ${vehiculo.precio.toLocaleString()}
                        </p>
                      </div>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Posible Compra
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{vehiculo.descripcion}</p>

                    {/* Especificaciones resumidas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                      <div>
                        <p className="text-gray-500">Año</p>
                        <p className="font-bold text-gray-900">{vehiculo.año}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Kilometraje</p>
                        <p className="font-bold text-gray-900">{vehiculo.kilometraje.toLocaleString()} km</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Transmisión</p>
                        <p className="font-bold text-gray-900">{vehiculo.transmision}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Tipo</p>
                        <p className="font-bold text-gray-900">{vehiculo.tipo}</p>
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex space-x-4">
                      <Link to={`/vehiculo/${vehiculo.id}`}>
                        <Button variant="primary" size="sm" >
                          Ver Detalles
                        </Button>
                      </Link>
                      <Button variant="danger" size="sm" onClick={() => onTogglePosibleCompra(vehiculo.id)}>
                          Quitar de la Lista
                        </Button>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Si no hay vehículos marcados */
        <div className="text-center py-16">
          <svg className="w-32 h-32 mx-auto text-gray-300 mb-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            No hay vehículos marcados
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Explora nuestro catálogo y marca los vehículos que te interesen
          </p>
          <button 
            onClick={() => navigate('/catalogo')}
            className="btn-primary text-lg px-8 py-3"
          >
            Ir al Catálogo
          </button>
        </div>
      )}
    </div>
  );
};

export default PosiblesComprasPage;