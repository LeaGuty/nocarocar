import React from 'react';

/**
 * Componente Badge para etiquetas y estados.
 *
 * @param {React.ReactNode} children - Contenido del badge
 * @param {string} variant - Variante de color: 'primary', 'secondary', 'success', 'warning', 'danger', 'info'
 * @param {string} size - Tamaño: 'sm', 'md', 'lg'
 * @param {boolean} rounded - Si debe ser completamente redondo (pill)
 * @param {string} className - Clases adicionales
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = true,
  className = '',
  ...props
}) => {
  // Estilos base
  const baseStyles = "inline-flex items-center justify-center font-semibold";

  // Estilos por variante
  const variantStyles = {
    primary: "bg-primary-600 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    light: "bg-gray-100 text-gray-800"
  };

  // Estilos por tamaño
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  };

  // Estilo de redondez
  const roundedStyles = rounded ? "rounded-full" : "rounded";

  // Combinar estilos
  const finalClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles} ${className}`;

  return (
    <span className={finalClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
