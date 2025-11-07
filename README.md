# NoCaro Car - Tienda de Vehículos

Aplicación web desarrollada con React y Vite para la gestión de un inventario de vehículos.

## 👨‍💻 Autor
**Luis Gutiérrez**

## 🚀 Características

- ✅ Catálogo completo de vehículos con información detallada
- ✅ Sistema de filtros múltiples (búsqueda, marca, tipo, precio, año)
- ✅ Agregar nuevos vehículos mediante formulario
- ✅ Marcar vehículos como "posible compra"
- ✅ Los vehículos marcados salen del inventario general
- ✅ Página de detalle de cada vehículo
- ✅ Página dedicada para vehículos marcados
- ✅ Diseño responsive con Tailwind CSS

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de JavaScript para interfaces de usuario
- **Vite** - Build tool y dev server ultrarrápido
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS 3** - Framework de CSS utility-first
- **JSON** - Almacenamiento de datos inicial

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
│   ├── components/          # Componentes reutilizables
│   │   ├── NavbarComponent.jsx
│   │   ├── Hero.jsx
│   │   ├── VehiculoCard.jsx
│   │   └── FormularioVehiculo.jsx
│   ├── pages/               # Páginas principales
│   │   ├── HomePage.jsx
│   │   ├── CatalogoPage.jsx
│   │   ├── DetalleVehiculoPage.jsx
│   │   └── PosiblesComprasPage.jsx
│   ├── data/                # Datos en JSON
│   │   └── vehiculos.json
│   ├── App.jsx              # Componente principal
│   ├── AppRoutes.jsx        # Configuración de rutas
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── package.json
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── vite.config.js           # Configuración de Vite
```

## 🎯 Funcionalidades Principales

### 1. Catálogo con Filtros
- Filtro por búsqueda (marca/modelo)
- Filtro por marca
- Filtro por tipo de vehículo
- Filtro por precio máximo
- Filtro por año mínimo
- Botón para limpiar todos los filtros

### 2. Gestión de Vehículos
- Agregar nuevos vehículos mediante formulario modal
- Ver detalles completos de cada vehículo
- Marcar/desmarcar vehículos como posible compra

### 3. Sistema de Posibles Compras
- Los vehículos marcados desaparecen del catálogo general
- Página dedicada para ver todos los vehículos marcados
- Cálculo automático del valor total
- Posibilidad de quitar vehículos de la lista

## 🎨 Diseño

- **Framework CSS:** Tailwind CSS
- **Diseño:** Responsive (mobile-first)
- **Colores:** Paleta azul personalizada
- **Animaciones:** Hover effects y transiciones suaves

## 📝 Scripts Disponibles
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Crear build de producción
npm run preview      # Previsualizar build de producción
npm run lint         # Ejecutar linter
```

## 🔗 Enlaces

- **Repositorio:** https://github.com/LeaGuty/nocarocar
- **Desarrollado por:** Luis Gutiérrez

## 📄 Licencia

Este proyecto fue desarrollado como parte de un ejercicio académico.

---

**Desarrollado con ❤️ y React**