// src/AppRoutes.jsx
// Configuración centralizada de todas las rutas de la aplicación

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import DetalleVehiculoPage from './pages/DetalleVehiculoPage';
import PosiblesComprasPage from './pages/PosiblesComprasPage';
import ContactoPage from './pages/ContactoPage';

/**
 * Componente que define todas las rutas de la aplicación.
 * Recibe las props necesarias desde App.jsx y las distribuye a cada página.
 * 
 * @param {Array} vehiculosDisponibles - Vehículos que NO están en posibles compras
 * @param {Array} todosVehiculos - Lista completa de vehículos
 * @param {Array} posiblesCompras - IDs de vehículos marcados
 * @param {Function} onTogglePosibleCompra - Función para marcar/desmarcar
 * @param {Function} onToggleFormulario - Función para abrir el formulario
 */
const AppRoutes = ({
  vehiculosDisponibles,
  todosVehiculos,
  posiblesCompras,
  onTogglePosibleCompra,
  onToggleFormulario
}) => {
  return (
    <Routes>
      {/* Ruta de inicio */}
      <Route path="/" element={<HomePage />} />

      {/* Ruta del catálogo - Muestra solo vehículos disponibles (no marcados) */}
      <Route
        path="/catalogo"
        element={
          <CatalogoPage
            vehiculos={vehiculosDisponibles}
            posiblesCompras={posiblesCompras}
            onToggleFormulario={onToggleFormulario}
          />
        }
      />

      {/* Ruta de detalle de vehículo - Usa TODOS los vehículos */}
      <Route
        path="/vehiculo/:id"
        element={
          <DetalleVehiculoPage
            vehiculos={todosVehiculos}
            posiblesCompras={posiblesCompras}
            onTogglePosibleCompra={onTogglePosibleCompra}
          />
        }
      />

      {/* Ruta de posibles compras */}
      <Route
        path="/posibles-compras"
        element={
          <PosiblesComprasPage
            vehiculos={todosVehiculos}
            posiblesCompras={posiblesCompras}
            onTogglePosibleCompra={onTogglePosibleCompra}
          />
        }
      />

      {/* Ruta de contacto */}
      <Route path="/contacto" element={<ContactoPage />} />
    </Routes>
  );
};

export default AppRoutes;