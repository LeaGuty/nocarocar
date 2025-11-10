// src/components/FormularioVehiculo.jsx
// Formulario para agregar nuevos vehículos al inventario

import React, { useState } from 'react';
import { Modal, Input, Button, Grid } from './ui';

/**
 * Componente de formulario modal para agregar nuevos vehículos.
 * Valida todos los campos antes de enviar.
 *
 * @param {Function} onAgregarVehiculo - Función que recibe el nuevo vehículo
 * @param {Function} onCerrar - Función para cerrar el modal
 * @param {boolean} isOpen - Controla si el modal está abierto
 */
const FormularioVehiculo = ({ onAgregarVehiculo, onCerrar, isOpen = true }) => {
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
    <Modal
      isOpen={isOpen}
      onClose={onCerrar}
      title="Agregar Nuevo Vehículo"
      size="3xl"
      footer={
        <div className="flex gap-4 justify-end">
          <Button variant="secondary" onClick={onCerrar}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Agregar Vehículo
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit}>
        <Grid cols="1" gap="lg" responsive={{ md: '2' }}>
          {/* Marca */}
          <Input
            label="Marca"
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            placeholder="Ej: Toyota"
            required
          />

          {/* Modelo */}
          <Input
            label="Modelo"
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            placeholder="Ej: Corolla"
            required
          />

          {/* Año */}
          <Input
            label="Año"
            type="number"
            name="año"
            value={formData.año}
            onChange={handleChange}
            placeholder="Ej: 2023"
            min="1900"
            max="2025"
            required
          />

          {/* Precio */}
          <Input
            label="Precio (CLP)"
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Ej: 23750000"
            min="0"
            required
          />

          {/* Kilometraje */}
          <Input
            label="Kilometraje"
            type="number"
            name="kilometraje"
            value={formData.kilometraje}
            onChange={handleChange}
            placeholder="Ej: 15000"
            min="0"
          />

          {/* Tipo */}
          <Input.Select
            label="Tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
            options={[
              { value: 'Sedan', label: 'Sedan' },
              { value: 'SUV', label: 'SUV' },
              { value: 'Camioneta', label: 'Camioneta' },
              { value: 'Deportivo', label: 'Deportivo' },
              { value: 'Hatchback', label: 'Hatchback' },
              { value: 'Convertible', label: 'Convertible' }
            ]}
          />

          {/* Color */}
          <Input
            label="Color"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Ej: Blanco"
            required
          />

          {/* Transmisión */}
          <Input.Select
            label="Transmisión"
            name="transmision"
            value={formData.transmision}
            onChange={handleChange}
            required
            options={[
              { value: 'Automática', label: 'Automática' },
              { value: 'Manual', label: 'Manual' }
            ]}
          />

          {/* Combustible */}
          <Input.Select
            label="Combustible"
            name="combustible"
            value={formData.combustible}
            onChange={handleChange}
            required
            options={[
              { value: 'Gasolina', label: 'Gasolina' },
              { value: 'Diésel', label: 'Diésel' },
              { value: 'Eléctrico', label: 'Eléctrico' },
              { value: 'Híbrido', label: 'Híbrido' }
            ]}
          />

          {/* URL de imagen */}
          <Input
            label="URL de Imagen"
            type="url"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
            helperText="Deja en blanco para usar imagen por defecto"
          />
        </Grid>

        {/* Descripción */}
        <div className="mt-6">
          <Input.Textarea
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Describe las características principales del vehículo..."
            rows={4}
            required
          />
        </div>
      </form>
    </Modal>
  );
};

export default FormularioVehiculo;