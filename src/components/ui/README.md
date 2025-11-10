# Componentes UI Reutilizables

Esta carpeta contiene componentes reutilizables de interfaz de usuario diseñados con Tailwind CSS para mantener consistencia en todo el sitio.

## Componentes Disponibles

### Button
Botón reutilizable con múltiples variantes y tamaños.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean (default: false)
- `type`: 'button' | 'submit' | 'reset' (default: 'button')

**Ejemplo:**
```jsx
import { Button } from './components/ui';

<Button variant="primary" size="lg" onClick={handleClick}>
  Comprar Ahora
</Button>
```

### Card
Contenedor de contenido con sombra y bordes redondeados.

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `hover`: boolean - efecto hover (default: false)
- `onClick`: function - hace la card clickeable

**Subcomponentes:**
- `Card.Header`: Encabezado de la card
- `Card.Body`: Cuerpo de la card
- `Card.Footer`: Pie de la card

**Ejemplo:**
```jsx
import { Card } from './components/ui';

<Card hover padding="lg">
  <Card.Header>
    <h3>Título de la Card</h3>
  </Card.Header>
  <Card.Body>
    Contenido de la card
  </Card.Body>
  <Card.Footer>
    <Button>Ver más</Button>
  </Card.Footer>
</Card>
```

### Badge
Etiquetas para mostrar estados o categorías.

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `rounded`: boolean - estilo pill (default: true)

**Ejemplo:**
```jsx
import { Badge } from './components/ui';

<Badge variant="success" size="md">
  Nuevo
</Badge>
```

### Input
Componente de campo de formulario con label, validación y mensajes de error.

**Props:**
- `label`: string
- `type`: string (default: 'text')
- `name`: string
- `value`: any
- `onChange`: function
- `placeholder`: string
- `required`: boolean (default: false)
- `error`: string - mensaje de error
- `helperText`: string - texto de ayuda
- `fullWidth`: boolean (default: true)

**Subcomponentes:**
- `Input.Textarea`: Campo de texto multilínea
- `Input.Select`: Selector dropdown

**Ejemplo:**
```jsx
import { Input } from './components/ui';

<Input
  label="Correo Electrónico"
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="correo@ejemplo.com"
  required
  error={errors.email}
  helperText="Ingresa tu correo electrónico"
/>

<Input.Textarea
  label="Descripción"
  name="descripcion"
  value={formData.descripcion}
  onChange={handleChange}
  rows={4}
/>

<Input.Select
  label="Tipo de Vehículo"
  name="tipo"
  value={formData.tipo}
  onChange={handleChange}
  options={[
    { value: 'sedan', label: 'Sedán' },
    { value: 'suv', label: 'SUV' },
    { value: 'camioneta', label: 'Camioneta' }
  ]}
/>
```

### Container
Contenedor para centrar y limitar el ancho del contenido.

**Props:**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' (default: 'xl')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `centered`: boolean (default: true)

**Ejemplo:**
```jsx
import { Container } from './components/ui';

<Container maxWidth="lg" padding="lg">
  <h1>Contenido centrado</h1>
</Container>
```

### Modal
Ventana modal emergente.

**Props:**
- `isOpen`: boolean - controla si el modal está abierto
- `onClose`: function - función para cerrar el modal
- `title`: string - título del modal
- `size`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' (default: 'md')
- `closeOnOverlayClick`: boolean (default: true)
- `footer`: ReactNode - contenido del pie del modal

**Ejemplo:**
```jsx
import { Modal, Button } from './components/ui';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Confirmar Acción"
  size="md"
  footer={
    <>
      <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirmar
      </Button>
    </>
  }
>
  <p>¿Estás seguro de realizar esta acción?</p>
</Modal>
```

### Grid
Sistema de grillas responsivas para layouts flexibles.

**Props:**
- `cols`: '1' | '2' | '3' | '4' | '5' | '6' | '12' - Columnas por defecto (default: '3')
- `gap`: 'none' | 'sm' | 'md' | 'lg' | 'xl' - Espacio entre elementos (default: 'md')
- `responsive`: object - Configuración responsiva { sm: '1', md: '2', lg: '3', xl: '4' }
- `className`: string - Clases adicionales

**Subcomponente Grid.Item:**
- `colSpan`: '1' | '2' | '3' | '4' | '5' | '6' | '12' | 'full' - Columnas que ocupa
- `responsiveSpan`: object - Spans responsivos { sm: '2', md: '4', lg: '6' }

**Ejemplo básico:**
```jsx
import { Grid } from './components/ui';

<Grid cols="3" gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

**Ejemplo responsivo:**
```jsx
// Grid que se adapta: 1 columna en móvil, 2 en tablet, 3 en desktop
<Grid cols="1" gap="md" responsive={{ sm: '1', md: '2', lg: '3' }}>
  <Card>Tarjeta 1</Card>
  <Card>Tarjeta 2</Card>
  <Card>Tarjeta 3</Card>
</Grid>
```

**Ejemplo con Grid.Item:**
```jsx
<Grid cols="12" gap="md">
  <Grid.Item colSpan="12" responsiveSpan={{ md: '6', lg: '4' }}>
    Contenido que ocupa 12 cols en móvil, 6 en tablet, 4 en desktop
  </Grid.Item>
  <Grid.Item colSpan="full">
    Contenido ancho completo
  </Grid.Item>
</Grid>
```

### NavLink
Enlace de navegación reutilizable con estilos consistentes.

**Props:**
- `to`: string - ruta de react-router
- `variant`: 'desktop' | 'mobile' (default: 'desktop')
- `onClick`: function

**Ejemplo:**
```jsx
import { NavLink } from './components/ui';

<NavLink to="/catalogo" variant="desktop">
  Catálogo
</NavLink>
```

## Importación

Puedes importar los componentes individualmente o en grupo:

```jsx
// Importación individual
import Button from './components/ui/Button';
import Card from './components/ui/Card';

// Importación múltiple desde el index
import { Button, Card, Badge, Input, Container } from './components/ui';
```

## Personalización

Todos los componentes aceptan una prop `className` para agregar clases adicionales de Tailwind CSS y personalizar el estilo según sea necesario:

```jsx
<Button className="mt-4 shadow-2xl">
  Botón Personalizado
</Button>
```

## Extender Componentes

Los componentes están diseñados para ser extendidos. Puedes crear variantes adicionales o componentes compuestos basados en estos:

```jsx
// Ejemplo de componente personalizado
const DangerButton = (props) => (
  <Button variant="danger" {...props} />
);
```
