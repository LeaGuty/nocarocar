import React from 'react';

/**
 * Componente Grid para layouts responsivos.
 *
 * @param {React.ReactNode} children - Elementos del grid
 * @param {string} cols - Número de columnas por defecto: '1', '2', '3', '4', '5', '6', '12'
 * @param {string} gap - Espacio entre elementos: 'none', 'sm', 'md', 'lg', 'xl'
 * @param {string} className - Clases adicionales
 * @param {object} responsive - Configuración responsiva: { sm: '1', md: '2', lg: '3', xl: '4' }
 */
const Grid = ({
  children,
  cols = '3',
  gap = 'md',
  className = '',
  responsive = null,
  ...props
}) => {
  // Estilos base
  const baseStyles = "grid";

  // Estilos de columnas base (sin prefijo responsive)
  const colsStyles = {
    '1': "grid-cols-1",
    '2': "grid-cols-2",
    '3': "grid-cols-3",
    '4': "grid-cols-4",
    '5': "grid-cols-5",
    '6': "grid-cols-6",
    '12': "grid-cols-12"
  };

  // Estilos de gap
  const gapStyles = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };

  // Mapa completo de clases responsivas para Tailwind
  const responsiveColsMap = {
    sm: {
      '1': 'sm:grid-cols-1',
      '2': 'sm:grid-cols-2',
      '3': 'sm:grid-cols-3',
      '4': 'sm:grid-cols-4',
      '5': 'sm:grid-cols-5',
      '6': 'sm:grid-cols-6',
      '12': 'sm:grid-cols-12'
    },
    md: {
      '1': 'md:grid-cols-1',
      '2': 'md:grid-cols-2',
      '3': 'md:grid-cols-3',
      '4': 'md:grid-cols-4',
      '5': 'md:grid-cols-5',
      '6': 'md:grid-cols-6',
      '12': 'md:grid-cols-12'
    },
    lg: {
      '1': 'lg:grid-cols-1',
      '2': 'lg:grid-cols-2',
      '3': 'lg:grid-cols-3',
      '4': 'lg:grid-cols-4',
      '5': 'lg:grid-cols-5',
      '6': 'lg:grid-cols-6',
      '12': 'lg:grid-cols-12'
    },
    xl: {
      '1': 'xl:grid-cols-1',
      '2': 'xl:grid-cols-2',
      '3': 'xl:grid-cols-3',
      '4': 'xl:grid-cols-4',
      '5': 'xl:grid-cols-5',
      '6': 'xl:grid-cols-6',
      '12': 'xl:grid-cols-12'
    }
  };

  // Construir estilos responsivos
  let responsiveClasses = [];
  if (responsive) {
    Object.keys(responsive).forEach(breakpoint => {
      const cols = responsive[breakpoint];
      if (responsiveColsMap[breakpoint] && responsiveColsMap[breakpoint][cols]) {
        responsiveClasses.push(responsiveColsMap[breakpoint][cols]);
      }
    });
  }

  // Combinar todos los estilos
  const finalClasses = [
    baseStyles,
    colsStyles[cols],
    gapStyles[gap],
    ...responsiveClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Componente Grid.Item para elementos individuales del grid
 * @param {string} colSpan - Número de columnas que ocupa: '1', '2', '3', '4', '5', '6', '12', 'full'
 * @param {object} responsiveSpan - Spans responsivos: { sm: '2', md: '4', lg: '6' }
 */
Grid.Item = ({ children, colSpan = '1', responsiveSpan = null, className = '', ...props }) => {
  const spanStyles = {
    '1': "col-span-1",
    '2': "col-span-2",
    '3': "col-span-3",
    '4': "col-span-4",
    '5': "col-span-5",
    '6': "col-span-6",
    '12': "col-span-12",
    'full': "col-span-full"
  };

  // Mapa de spans responsivos
  const responsiveSpanMap = {
    sm: {
      '1': 'sm:col-span-1',
      '2': 'sm:col-span-2',
      '3': 'sm:col-span-3',
      '4': 'sm:col-span-4',
      '5': 'sm:col-span-5',
      '6': 'sm:col-span-6',
      '12': 'sm:col-span-12',
      'full': 'sm:col-span-full'
    },
    md: {
      '1': 'md:col-span-1',
      '2': 'md:col-span-2',
      '3': 'md:col-span-3',
      '4': 'md:col-span-4',
      '5': 'md:col-span-5',
      '6': 'md:col-span-6',
      '12': 'md:col-span-12',
      'full': 'md:col-span-full'
    },
    lg: {
      '1': 'lg:col-span-1',
      '2': 'lg:col-span-2',
      '3': 'lg:col-span-3',
      '4': 'lg:col-span-4',
      '5': 'lg:col-span-5',
      '6': 'lg:col-span-6',
      '12': 'lg:col-span-12',
      'full': 'lg:col-span-full'
    },
    xl: {
      '1': 'xl:col-span-1',
      '2': 'xl:col-span-2',
      '3': 'xl:col-span-3',
      '4': 'xl:col-span-4',
      '5': 'xl:col-span-5',
      '6': 'xl:col-span-6',
      '12': 'xl:col-span-12',
      'full': 'xl:col-span-full'
    }
  };

  // Construir spans responsivos
  let responsiveClasses = [];
  if (responsiveSpan) {
    Object.keys(responsiveSpan).forEach(breakpoint => {
      const span = responsiveSpan[breakpoint];
      if (responsiveSpanMap[breakpoint] && responsiveSpanMap[breakpoint][span]) {
        responsiveClasses.push(responsiveSpanMap[breakpoint][span]);
      }
    });
  }

  // Combinar clases
  const finalClasses = [
    spanStyles[colSpan],
    ...responsiveClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
};

export default Grid;
