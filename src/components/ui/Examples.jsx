import React, { useState } from 'react';
import {
  Button,
  Card,
  Badge,
  Input,
  Container,
  Modal,
  Grid,
  NavLink
} from './index';

/**
 * Componente de demostración de todos los componentes UI
 * Útil para desarrollo y pruebas visuales
 */
const Examples = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    descripcion: '',
    tipo: 'sedan'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth="2xl" padding="lg">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Biblioteca de Componentes UI
      </h1>

      {/* Sección: Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Buttons</h2>
        <Card padding="lg">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="outline">Outline</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>

            <div>
              <Button variant="primary" fullWidth>Full Width Button</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Sección: Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cards</h2>
        <Grid cols="3" gap="lg" responsive={{ sm: '1', md: '2', lg: '3' }}>
          <Card hover>
            <Card.Header>
              <h3 className="text-xl font-bold">Card con Header</h3>
            </Card.Header>
            <Card.Body>
              <p>Esta es una card con header, body y efecto hover.</p>
            </Card.Body>
          </Card>

          <Card padding="lg">
            <Card.Body>
              <h3 className="text-xl font-bold mb-2">Card Simple</h3>
              <p>Card con padding grande y sin header ni footer.</p>
            </Card.Body>
          </Card>

          <Card hover>
            <Card.Header>
              <h3 className="text-xl font-bold">Con Footer</h3>
            </Card.Header>
            <Card.Body>
              <p>Esta card incluye un footer con botón.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" size="sm">Ver más</Button>
            </Card.Footer>
          </Card>
        </Grid>
      </section>

      {/* Sección: Badges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Badges</h2>
        <Card padding="lg">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="light">Light</Badge>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="primary" size="sm">Small</Badge>
              <Badge variant="primary" size="md">Medium</Badge>
              <Badge variant="primary" size="lg">Large</Badge>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="success" rounded={false}>Not Rounded</Badge>
              <Badge variant="success" rounded>Rounded (Pill)</Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Sección: Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Form Inputs</h2>
        <Card padding="lg">
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="correo@ejemplo.com"
              helperText="Ingresa tu correo electrónico"
            />

            <Input
              label="Contraseña"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
            />

            <Input.Textarea
              label="Descripción"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Escribe aquí..."
              rows={4}
              helperText="Máximo 500 caracteres"
            />

            <Input.Select
              label="Tipo de Vehículo"
              name="tipo"
              value={formData.tipo}
              onChange={handleInputChange}
              options={[
                { value: 'sedan', label: 'Sedán' },
                { value: 'suv', label: 'SUV' },
                { value: 'camioneta', label: 'Camioneta' },
                { value: 'deportivo', label: 'Deportivo' }
              ]}
            />

            <Input
              label="Email con Error"
              type="email"
              value="email-invalido"
              error="Por favor ingresa un email válido"
            />
          </div>
        </Card>
      </section>

      {/* Sección: Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grid Layout</h2>

        {/* Grid Responsivo Básico */}
        <Card padding="lg" className="mb-6">
          <h3 className="text-lg font-bold mb-3">Grid Responsivo Básico</h3>
          <p className="text-gray-600 mb-4 text-sm">
            1 columna en móvil, 2 en tablet, 4 en desktop
          </p>
          <Grid cols="1" gap="md" responsive={{ sm: '1', md: '2', lg: '4' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-primary-100 p-4 rounded text-center font-bold text-primary-700"
              >
                Item {num}
              </div>
            ))}
          </Grid>
        </Card>

        {/* Grid con Cards */}
        <Card padding="lg" className="mb-6">
          <h3 className="text-lg font-bold mb-3">Grid con Cards (Catálogo)</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Ejemplo de uso típico para catálogo de productos
          </p>
          <Grid cols="1" gap="lg" responsive={{ sm: '1', md: '2', lg: '3' }}>
            {[1, 2, 3].map((num) => (
              <Card key={num} hover padding="md">
                <div className="bg-gray-200 h-32 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-400">Imagen {num}</span>
                </div>
                <h4 className="font-bold mb-2">Producto {num}</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Descripción del producto
                </p>
                <Button variant="primary" size="sm" fullWidth>
                  Ver Detalles
                </Button>
              </Card>
            ))}
          </Grid>
        </Card>

        {/* Grid con spans personalizados */}
        <Card padding="lg">
          <h3 className="text-lg font-bold mb-3">Grid con Spans Personalizados</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Sistema de 12 columnas con spans responsivos
          </p>
          <Grid cols="12" gap="md">
            <Grid.Item
              colSpan="12"
              className="bg-green-100 p-4 rounded text-center font-bold"
            >
              Full Width (12 cols)
            </Grid.Item>

            <Grid.Item
              colSpan="12"
              responsiveSpan={{ md: '6' }}
              className="bg-blue-100 p-4 rounded text-center font-bold"
            >
              12 cols móvil / 6 cols tablet+
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ md: '6' }}
              className="bg-blue-100 p-4 rounded text-center font-bold"
            >
              12 cols móvil / 6 cols tablet+
            </Grid.Item>

            <Grid.Item
              colSpan="12"
              responsiveSpan={{ md: '4' }}
              className="bg-purple-100 p-4 rounded text-center font-bold"
            >
              12 / 4
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ md: '4' }}
              className="bg-purple-100 p-4 rounded text-center font-bold"
            >
              12 / 4
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ md: '4' }}
              className="bg-purple-100 p-4 rounded text-center font-bold"
            >
              12 / 4
            </Grid.Item>

            <Grid.Item
              colSpan="12"
              responsiveSpan={{ sm: '6', md: '3' }}
              className="bg-yellow-100 p-4 rounded text-center font-bold"
            >
              12 / 6 / 3
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ sm: '6', md: '3' }}
              className="bg-yellow-100 p-4 rounded text-center font-bold"
            >
              12 / 6 / 3
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ sm: '6', md: '3' }}
              className="bg-yellow-100 p-4 rounded text-center font-bold"
            >
              12 / 6 / 3
            </Grid.Item>
            <Grid.Item
              colSpan="12"
              responsiveSpan={{ sm: '6', md: '3' }}
              className="bg-yellow-100 p-4 rounded text-center font-bold"
            >
              12 / 6 / 3
            </Grid.Item>
          </Grid>
        </Card>
      </section>

      {/* Sección: Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Modal</h2>
        <Card padding="lg">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Abrir Modal
          </Button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Ejemplo de Modal"
            size="lg"
            footer={
              <div className="flex justify-end gap-3">
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Confirmar
                </Button>
              </div>
            }
          >
            <p className="mb-4">
              Este es un ejemplo de modal con título, contenido y footer personalizado.
            </p>
            <p>
              Los modales son útiles para confirmaciones, formularios y mostrar información
              adicional sin cambiar de página.
            </p>
          </Modal>
        </Card>
      </section>

      {/* Sección: Containers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Containers</h2>
        <div className="space-y-4">
          <Container maxWidth="sm" padding="md" className="bg-blue-50 py-4">
            <p className="text-center font-bold">Container Small (sm)</p>
          </Container>
          <Container maxWidth="md" padding="md" className="bg-green-50 py-4">
            <p className="text-center font-bold">Container Medium (md)</p>
          </Container>
          <Container maxWidth="lg" padding="md" className="bg-yellow-50 py-4">
            <p className="text-center font-bold">Container Large (lg)</p>
          </Container>
        </div>
      </section>
    </Container>
  );
};

export default Examples;
