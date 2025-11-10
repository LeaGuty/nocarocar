import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de enlace reutilizable para la barra de navegación.
 * Acepta una variante 'desktop' o 'mobile' para cambiar estilos.
 *
 * @param {string} to - La ruta a la que navegar (para react-router-Link)
 * @param {string} variant - 'desktop' o 'mobile'
 * @param {string} className - Clases adicionales para mergear
 * @param {function} onClick - Función opcional para el clic
 * @param {React.ReactNode} children - El texto o ícono dentro del enlace
 */
const NavLink = ({ to, variant = 'desktop', className = '', onClick, children }) => {
  // --- Estilos base compartidos por ambas variantes ---
  const baseStyles = "font-medium transition-colors duration-200";

  // --- Estilos específicos de cada variante ---
  const variantStyles = {
    desktop: "hover:text-primary-200",
    mobile: "block py-2 px-4 hover:bg-primary-600 rounded"
  };

  // --- Combinamos los estilos ---
  // 1. Estilos base
  // 2. Estilos de la variante (desktop o mobile)
  // 3. Clases extra que pasemos como prop (ej. para el enlace activo)
  const finalClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <Link to={to} className={finalClasses} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;