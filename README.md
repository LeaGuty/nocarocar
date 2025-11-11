# NoCaro Car - Tienda de Vehículos

Aplicación web moderna desarrollada con React 19 y Vite para la gestión y compra de vehículos. Incluye un sistema completo de componentes UI reutilizables y diseño completamente responsive.

## 👨‍💻 Autor
**Leandro Gutiérrez**

## 🚀 Características

- ✅ Catálogo completo de vehículos con información detallada
- ✅ Sistema de filtros múltiples avanzados (búsqueda, marca, tipo, precio, año)
- ✅ Agregar nuevos vehículos mediante formulario modal responsive
- ✅ Marcar vehículos como "posible compra"
- ✅ Los vehículos marcados salen del inventario general
- ✅ Página de detalle con especificaciones completas
- ✅ Página dedicada para gestión de posibles compras
- ✅ Sistema de componentes UI reutilizables (Container, Grid, Card, Button, Input, Badge, Modal)
- ✅ Diseño completamente responsive (mobile-first)
- ✅ Navegación con hamburger menu en móviles
- ✅ Footer con información de contacto y redes sociales
- ✅ Animaciones y transiciones suaves

## 🛠️ Tecnologías Utilizadas

- **React 19** - Librería de JavaScript para interfaces de usuario
- **Vite 7** - Build tool y dev server ultrarrápido
- **React Router DOM 7** - Sistema de navegación entre páginas
- **Tailwind CSS 3** - Framework CSS utility-first para diseño responsive
- **JSON** - Almacenamiento de datos inicial
- **gh-pages** - Despliegue en GitHub Pages

## 📦 Instalación

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/LeaGuty/nocarocar.git
cd nocarocar
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173/
```

## 📁 Estructura del Proyecto
```
nocarocar/
├── src/
│   ├── components/          # Componentes de la aplicación
│   │   ├── ui/              # Sistema de componentes UI reutilizables
│   │   │   ├── Badge.jsx           # Etiquetas de estado
│   │   │   ├── Button.jsx          # Botones con variantes
│   │   │   ├── Card.jsx            # Tarjetas de contenido
│   │   │   ├── Container.jsx       # Contenedores responsivos
│   │   │   ├── Grid.jsx            # Sistema de grillas
│   │   │   ├── Input.jsx           # Inputs y formularios
│   │   │   ├── Modal.jsx           # Ventanas modales
│   │   │   ├── NavLink.jsx         # Enlaces de navegación
│   │   │   ├── Examples.jsx        # Ejemplos de componentes
│   │   │   └── index.js            # Exportaciones centralizadas
│   │   ├── NavbarComponent.jsx     # Barra de navegación
│   │   ├── Hero.jsx                # Sección hero de inicio
│   │   ├── Footer.jsx              # Pie de página
│   │   ├── VehiculoCard.jsx        # Tarjeta de vehículo
│   │   └── FormularioVehiculo.jsx  # Formulario para agregar vehículos
│   ├── pages/               # Páginas principales
│   │   ├── HomePage.jsx            # Página de inicio
│   │   ├── CatalogoPage.jsx        # Catálogo con filtros
│   │   ├── DetalleVehiculoPage.jsx # Detalle del vehículo
│   │   └── PosiblesComprasPage.jsx # Lista de posibles compras
│   ├── data/                # Datos en JSON
│   │   └── vehiculos.json          # Base de datos de vehículos
│   ├── assets/              # Recursos estáticos
│   │   ├── auto.svg
│   │   └── auto2.svg
│   ├── App.jsx              # Componente principal
│   ├── AppRoutes.jsx        # Configuración de rutas
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales y Tailwind
├── public/                  # Archivos estáticos públicos
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind CSS
├── postcss.config.js        # Configuración de PostCSS
├── vite.config.js           # Configuración de Vite
└── README.md                # Documentación del proyecto
```

## 🎯 Funcionalidades Principales

### 1. Catálogo con Filtros Avanzados
- Filtro por búsqueda en tiempo real (marca/modelo)
- Filtro por marca específica
- Filtro por tipo de vehículo (Sedan, SUV, Camioneta, etc.)
- Filtro por precio máximo
- Filtro por año mínimo
- Contador de resultados filtrados
- Botón para limpiar todos los filtros
- Diseño responsive en grid (1 columna en móvil, 2 en tablet, 3 en desktop)

### 2. Gestión de Vehículos
- Agregar nuevos vehículos mediante formulario modal responsive
- Validación completa de campos del formulario
- Vista de detalle con especificaciones técnicas completas
- Marcar/desmarcar vehículos como posible compra
- Navegación intuitiva entre páginas

### 3. Sistema de Posibles Compras
- Los vehículos marcados se mueven automáticamente a una sección dedicada
- Página exclusiva para gestionar vehículos de interés
- Cálculo automático del valor total de posibles compras
- Posibilidad de quitar vehículos de la lista
- Indicador visual de vehículos marcados con badges

### 4. Sistema de Componentes UI Reutilizables
El proyecto incluye un sistema completo de componentes UI que garantizan consistencia visual y funcionalidad responsive:

- **Container**: Contenedor responsive con tamaños predefinidos (sm, md, lg, xl, 2xl)
- **Grid**: Sistema de grillas flexible con soporte responsive completo
- **Card**: Tarjetas de contenido con variantes de padding
- **Button**: Botones con múltiples variantes (primary, secondary, success, danger)
- **Input**: Inputs, selects y textareas con etiquetas y validación
- **Badge**: Etiquetas de estado con variantes de color
- **Modal**: Ventanas modales con diferentes tamaños
- **NavLink**: Enlaces de navegación con estilos activos

## 🎨 Diseño

- **Framework CSS:** Tailwind CSS 3
- **Metodología:** Mobile-first (responsive desde 320px hasta 1920px+)
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet (sm): 640px
  - Desktop (md): 768px
  - Large (lg): 1024px
  - Extra Large (xl): 1280px
- **Paleta de colores:**
  - Primary: Azul personalizado (#2563eb - #1e40af)
  - Success: Verde (#10b981)
  - Danger: Rojo (#ef4444)
  - Secondary: Gris (#6b7280)
- **Tipografía:** Sistema de fuentes nativo optimizado
- **Animaciones:** Transiciones suaves en hover y focus
- **Iconos:** SVG inline para mejor rendimiento

## 📝 Scripts Disponibles
```bash
npm run dev          # Iniciar servidor de desarrollo en http://localhost:5173
npm run build        # Crear build optimizado de producción
npm run preview      # Previsualizar build de producción localmente
npm run lint         # Ejecutar ESLint para análisis de código
npm run deploy       # Desplegar aplicación en GitHub Pages
```

## 🌐 Páginas de la Aplicación

1. **Home (`/`)** - Página de inicio con hero y presentación
2. **Catálogo (`/catalogo`)** - Catálogo completo con sistema de filtros
3. **Detalle (`/vehiculo/:id`)** - Vista detallada de cada vehículo
4. **Posibles Compras (`/posibles-compras`)** - Gestión de vehículos marcados

## 💡 Características Técnicas

- ⚡ Vite para desarrollo rápido y HMR (Hot Module Replacement)
- 🎨 Tailwind CSS con configuración personalizada
- 🧩 Componentes reutilizables y modulares
- 📱 Diseño 100% responsive
- ♿ Navegación accesible con React Router
- 🔍 Filtrado en tiempo real sin recargas
- 💾 Persistencia de estado en memoria
- 🎯 Validación de formularios

## 🔗 Enlaces

- **Repositorio:** https://github.com/LeaGuty/nocarocar
- **Desarrollado por:** Leandro Gutiérrez

## 📄 Licencia

Este proyecto fue desarrollado como parte de un ejercicio académico.

---

**Desarrollado con ❤️ usando React 19 y Tailwind CSS**