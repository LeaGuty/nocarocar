// src/components/FormularioVehiculo.jsx
// Formulario para agregar nuevos vehículos al inventario

import React, { useState } from 'react';

/**
 * Componente de formulario modal para agregar nuevos vehículos.
 * Valida todos los campos antes de enviar.
 * 
 * @param {Function} onAgregarVehiculo - Función que recibe el nuevo vehículo
 * @param {Function} onCerrar - Función para cerrar el modal
 */
const FormularioVehiculo = ({ onAgregarVehiculo, onCerrar }) => {
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    año: '',
    precio: '',
    kilometraje: '',
    tipo: 'Sedan',
    color: '',
    transmision: 'Automática',
    combustible: 'Gasolina',
    imagen: '',
    descripcion: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos requeridos estén llenos
    if (!formData.marca || !formData.modelo || !formData.año || 
        !formData.precio || !formData.color || !formData.descripcion) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    // Crear objeto del nuevo vehículo
    const nuevoVehiculo = {
      id: Date.now(), // ID único basado en timestamp
      marca: formData.marca,
      modelo: formData.modelo,
      año: parseInt(formData.año),
      precio: parseFloat(formData.precio),
      kilometraje: parseInt(formData.kilometraje) || 0,
      tipo: formData.tipo,
      color: formData.color,
      transmision: formData.transmision,
      combustible: formData.combustible,
      imagen: formData.imagen || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500',
      descripcion: formData.descripcion
    };

    // Llamar función para agregar el vehículo
    onAgregarVehiculo(nuevoVehiculo);
    
    // Cerrar el modal
    onCerrar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Encabezado del modal */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Agregar Nuevo Vehículo</h2>
          <button 
            onClick={onCerrar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Marca */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marca <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                placeholder="Ej: Toyota"
                className="input-field"
                required
              />
            </div>

            {/* Modelo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modelo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                placeholder="Ej: Corolla"
                className="input-field"
                required
              />
            </div>

            {/* Año */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Año <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="año"
                value={formData.año}
                onChange={handleChange}
                placeholder="Ej: 2023"
                min="1900"
                max="2025"
                className="input-field"
                required
              />
            </div>

            {/* Precio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio (CLP) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="Ej: 23750000"
                min="0"
                className="input-field"
                required
              />
            </div>

            {/* Kilometraje */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kilometraje
              </label>
              <input
                type="number"
                name="kilometraje"
                value={formData.kilometraje}
                onChange={handleChange}
                placeholder="Ej: 15000"
                min="0"
                className="input-field"
              />
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo <span className="text-red-500">*</span>
              </label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Deportivo">Deportivo</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Convertible">Convertible</option>
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Ej: Blanco"
                className="input-field"
                required
              />
            </div>

            {/* Transmisión */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transmisión <span className="text-red-500">*</span>
              </label>
              <select
                name="transmision"
                value={formData.transmision}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="Automática">Automática</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* Combustible */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Combustible <span className="text-red-500">*</span>
              </label>
              <select
                name="combustible"
                value={formData.combustible}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="Gasolina">Gasolina</option>
                <option value="Diésel">Diésel</option>
                <option value="Eléctrico">Eléctrico</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>

            {/* URL de imagen */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL de Imagen
              </label>
              <input
                type="url"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                className="input-field"
              />
              <p className="text-xs text-gray-500 mt-1">
                Deja en blanco para usar imagen por defecto
              </p>
            </div>
          </div>

          {/* Descripción */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción <span className="text-red-500">*</span>
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Describe las características principales del vehículo..."
              rows="4"
              className="input-field"
              required
            />
          </div>

          {/* Botones de acción */}
          <div className="flex space-x-4 mt-8">
            <button
              type="button"
              onClick={onCerrar}
              className="btn-secondary flex-1"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
            >
              Agregar Vehículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioVehiculo;