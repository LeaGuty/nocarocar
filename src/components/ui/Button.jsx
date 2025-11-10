import React from 'react';

/**
 * Componente de bot�n reutilizable con variantes de estilo.
 *
 * @param {string} variant - Variante del bot�n: 'primary', 'secondary', 'danger', 'success'
 * @param {string} size - Tama�o del bot�n: 'sm', 'md', 'lg'
 * @param {boolean} fullWidth - Si el bot�n debe ocupar todo el ancho
 * @param {string} className - Clases adicionales
 * @param {React.ReactNode} children - Contenido del bot�n
 * @param {function} onClick - Funci�n al hacer clic
 * @param {string} type - Tipo del bot�n: 'button', 'submit', 'reset'
 * @param {boolean} disabled - Si el bot�n est� deshabilitado
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  // Estilos base compartidos
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  // Estilos por variante
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-white hover:bg-gray-100 text-blue-700 border-2 border-blue-600",
    danger: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg",
    outline: "bg-transparent hover:bg-blue-50 text-blue-600 border-2 border-blue-600"
  };

  // Estilos por tama�o
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // Estilo de ancho completo
  const widthStyle = fullWidth ? "w-full" : "";

  // Combinar todos los estilos
  const finalClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  return (
    <button
      type={type}
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
