// src/App.jsx
// Componente principal de la aplicación

import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FormularioVehiculo from './components/FormularioVehiculo';
import AppRoutes from './AppRoutes';
import vehiculosIniciales from './data/vehiculos.json';
import './App.css';

/**
 * Componente principal que maneja todo el estado de la aplicación.
 * Delega las rutas a AppRoutes para mantener el código organizado.
 */
function App() {
  // Estado para la lista de vehículos (inicia con los del JSON)
  const [vehiculos, setVehiculos] = useState([]);
  
  // Estado para los IDs de vehículos marcados como posible compra
  const [posiblesCompras, setPosiblesCompras] = useState([]);
  
  // Estado para mostrar/ocultar el formulario de agregar vehículo
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Cargar vehículos del JSON al iniciar la aplicación
  useEffect(() => {
    setVehiculos(vehiculosIniciales);
  }, []);

  /**
   * Función para agregar un nuevo vehículo al inventario
   * @param {Object} nuevoVehiculo - Objeto con los datos del vehículo
   */
  const handleAgregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
    setMostrarFormulario(false);
    alert('¡Vehículo agregado exitosamente!');
  };

  /**
   * Función para marcar/desmarcar un vehículo como posible compra
   * Si está marcado, lo desmarca. Si no está marcado, lo marca.
   * @param {number} vehiculoId - ID del vehículo
   */
  const handleTogglePosibleCompra = (vehiculoId) => {
    if (posiblesCompras.includes(vehiculoId)) {
      // Si ya está marcado, lo quitamos
      setPosiblesCompras(posiblesCompras.filter(id => id !== vehiculoId));
      alert('Vehículo removido de posibles compras');
    } else {
      // Si no está marcado, lo agregamos
      setPosiblesCompras([...posiblesCompras, vehiculoId]);
      alert('Vehículo marcado como posible compra');
    }
  };

  /**
   * Filtra los vehículos para mostrar solo los que NO están en posibles compras
   * Esto cumple con el requisito de que los marcados salgan del inventario general
   */
  const vehiculosDisponibles = vehiculos.filter(
    v => !posiblesCompras.includes(v.id)
  );

  return (
    <HashRouter>
      {/* Navbar fijo en todas las páginas */}
      <NavbarComponent posiblesComprasCount={posiblesCompras.length} />

      {/* Modal del formulario (se muestra cuando mostrarFormulario es true) */}
      {mostrarFormulario && (
        <FormularioVehiculo
          onAgregarVehiculo={handleAgregarVehiculo}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}

      {/* Todas las rutas están en AppRoutes */}
      <AppRoutes
        vehiculosDisponibles={vehiculosDisponibles}
        todosVehiculos={vehiculos}
        posiblesCompras={posiblesCompras}
        onTogglePosibleCompra={handleTogglePosibleCompra}
        onToggleFormulario={() => setMostrarFormulario(true)}
      />
    </HashRouter>
  );
}

export default App;