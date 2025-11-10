import React from 'react';

/**
 * Componente Card reutilizable para contenedores de contenido.
 *
 * @param {React.ReactNode} children - Contenido de la tarjeta
 * @param {string} className - Clases adicionales
 * @param {boolean} hover - Si debe tener efecto hover
 * @param {function} onClick - Función al hacer clic (hace la card clickeable)
 * @param {string} padding - Tamaño del padding: 'none', 'sm', 'md', 'lg'
 */
const Card = ({
  children,
  className = '',
  hover = false,
  onClick,
  padding = 'md',
  ...props
}) => {
  // Estilos base
  const baseStyles = "bg-white rounded-lg shadow-md";

  // Estilos de hover
  const hoverStyles = hover ? "hover:shadow-xl transition-shadow duration-300" : "";

  // Estilos clickeable
  const clickableStyles = onClick ? "cursor-pointer" : "";

  // Estilos de padding
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  };

  // Combinar estilos
  const finalClasses = `${baseStyles} ${hoverStyles} ${clickableStyles} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={finalClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

/**
 * Componente para el encabezado de una Card
 */
Card.Header = ({ children, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 pb-3 mb-3 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Componente para el cuerpo de una Card
 */
Card.Body = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

/**
 * Componente para el pie de una Card
 */
Card.Footer = ({ children, className = '' }) => {
  return (
    <div className={`border-t border-gray-200 pt-3 mt-3 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
