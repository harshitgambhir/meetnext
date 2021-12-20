import React, { useState } from 'react';

const Input = ({ className, disabled, label, textarea, onFocus, onBlur, error, left, ...props }) => {
  if (left) {
    return (
      <div className={`relative ${className}`}>
        <input
          className={`peer text-sm placeholder-transparent appearance-none outline-none focus:ring-1 border flex-1 block w-full rounded-md border-gray-300 pt-5 pb-1 px-3 pl-[5.2rem]  mt-1 ${disabled ? 'cursor-not-allowed opacity-50' : ''
            } bg-white ${error ? 'ring-red-600 focus:ring-red-600 ring-1' : 'focus:ring-blue-600'}`}
          disabled={disabled}
          placeholder={label}
          {...props}
        />
        <div className='block peer-placeholder-shown:hidden peer-focus:block absolute top-5 left-3 text-sm text-gray-500'>{left}</div>
        <label className='absolute pointer-events-none left-3 top-1 transition-all text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:text-xs peer-focus:top-1'>{label}</label>
        {error && <div className='text-red-600 text-sm mt-2'>{error}</div>}
      </div>
    );
  }
  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea
          className={`peer text-sm placeholder-transparent appearance-none outline-none focus:ring-1 border flex-1 block w-full rounded-md border-gray-300 pt-5 pb-1 px-3  mt-1 ${disabled ? 'cursor-not-allowed opacity-50' : ''
            } bg-white ${error ? 'ring-red-600 focus:ring-red-600 ring-1' : 'focus:ring-blue-600'}`}
          disabled={disabled}
          placeholder={label}
          style={{
            resize: 'none'
          }}
          {...props}
        />
      ) : (
        <input
          className={`peer text-sm placeholder-transparent appearance-none outline-none focus:ring-1 border flex-1 block w-full rounded-md border-gray-300 pt-5 pb-1 px-3  mt-1 ${disabled ? 'cursor-not-allowed opacity-50' : ''
            } bg-white ${error ? 'ring-red-600 focus:ring-red-600 ring-1' : 'focus:ring-blue-600'}`}
          disabled={disabled}
          placeholder={label}
          {...props}
        />
      )}
      <label className='absolute pointer-events-none left-3 top-1 transition-all text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:text-xs peer-focus:top-1'>{label}</label>
      {error && <div className='text-red-600 text-sm mt-2'>{error}</div>}
    </div>
  );
}

export default Input;