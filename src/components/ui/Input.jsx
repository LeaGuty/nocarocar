import React from 'react';

/**
 * Componente Input reutilizable para formularios.
 *
 * @param {string} label - Etiqueta del campo
 * @param {string} type - Tipo de input (text, email, password, number, etc.)
 * @param {string} name - Nombre del campo
 * @param {string} value - Valor del campo
 * @param {function} onChange - Función al cambiar el valor
 * @param {string} placeholder - Texto placeholder
 * @param {boolean} required - Si el campo es requerido
 * @param {string} error - Mensaje de error
 * @param {string} className - Clases adicionales
 * @param {boolean} fullWidth - Si debe ocupar todo el ancho
 * @param {string} helperText - Texto de ayuda debajo del campo
 */
const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = '',
  fullWidth = true,
  helperText,
  ...props
}) => {
  // Estilos del input
  const baseInputStyles = "border rounded-lg px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2";
  const errorStyles = error
    ? "border-red-500 focus:ring-red-300"
    : "border-gray-300 focus:ring-primary-300 focus:border-primary-500";
  const widthStyles = fullWidth ? "w-full" : "";

  const inputClasses = `${baseInputStyles} ${errorStyles} ${widthStyles} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        {...props}
      />

      {/* Helper text */}
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-500 mt-1 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Componente Textarea reutilizable
 */
Input.Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = '',
  fullWidth = true,
  helperText,
  rows = 4,
  ...props
}) => {
  const baseTextareaStyles = "border rounded-lg px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 resize-vertical";
  const errorStyles = error
    ? "border-red-500 focus:ring-red-300"
    : "border-gray-300 focus:ring-primary-300 focus:border-primary-500";
  const widthStyles = fullWidth ? "w-full" : "";

  const textareaClasses = `${baseTextareaStyles} ${errorStyles} ${widthStyles} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={textareaClasses}
        required={required}
        rows={rows}
        {...props}
      />

      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}

      {error && (
        <p className="text-xs text-red-500 mt-1 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Componente Select reutilizable
 */
Input.Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
  className = '',
  fullWidth = true,
  helperText,
  ...props
}) => {
  const baseSelectStyles = "border rounded-lg px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2";
  const errorStyles = error
    ? "border-red-500 focus:ring-red-300"
    : "border-gray-300 focus:ring-primary-300 focus:border-primary-500";
  const widthStyles = fullWidth ? "w-full" : "";

  const selectClasses = `${baseSelectStyles} ${errorStyles} ${widthStyles} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        required={required}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}

      {error && (
        <p className="text-xs text-red-500 mt-1 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
