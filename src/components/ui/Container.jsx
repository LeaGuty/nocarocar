import React from 'react';

/**
 * Componente Container para centrar y limitar el ancho del contenido.
 *
 * @param {React.ReactNode} children - Contenido del contenedor
 * @param {string} maxWidth - Ancho máximo: 'sm', 'md', 'lg', 'xl', '2xl', 'full'
 * @param {string} padding - Padding horizontal: 'none', 'sm', 'md', 'lg'
 * @param {string} className - Clases adicionales
 * @param {boolean} centered - Si debe centrar el contenido
 */
const Container = ({
  children,
  maxWidth = 'xl',
  padding = 'md',
  className = '',
  centered = true,
  ...props
}) => {
  // Estilos base
  const baseStyles = centered ? "mx-auto" : "";

  // Estilos de ancho máximo
  const maxWidthStyles = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    '2xl': "max-w-screen-2xl",
    full: "max-w-full"
  };

  // Estilos de padding
  const paddingStyles = {
    none: "",
    sm: "px-2",
    md: "px-4",
    lg: "px-6"
  };

  // Combinar estilos
  const finalClasses = `${baseStyles} ${maxWidthStyles[maxWidth]} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
