import React from 'react';

/**
 * Componente Modal reutilizable para ventanas emergentes.
 *
 * @param {boolean} isOpen - Si el modal está abierto
 * @param {function} onClose - Función para cerrar el modal
 * @param {string} title - Título del modal
 * @param {React.ReactNode} children - Contenido del modal
 * @param {string} size - Tamaño del modal: 'sm', 'md', 'lg', 'xl', 'full'
 * @param {boolean} closeOnOverlayClick - Si debe cerrar al hacer clic fuera
 * @param {React.ReactNode} footer - Contenido del pie del modal
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  footer,
  className = '',
  ...props
}) => {
  // Si no está abierto, no renderizar nada
  if (!isOpen) return null;

  // Estilos por tamaño
  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    '2xl': "max-w-2xl",
    '3xl': "max-w-3xl",
    full: "max-w-full mx-4"
  };

  // Manejar click en overlay
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleOverlayClick}
      {...props}
    >
      <div className={`bg-white rounded-lg shadow-xl w-full ${sizeStyles[size]} ${className}`}>
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="border-t border-gray-200 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
