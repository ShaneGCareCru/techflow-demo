import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export default function Button({ 
  loading = false, 
  loadingText = 'Loading...', 
  children, 
  disabled,
  onClick,
  ...props 
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      onClick={loading ? undefined : onClick}
      {...props}
      style={{
        position: 'relative',
        opacity: loading ? 0.7 : 1,
        cursor: loading ? 'not-allowed' : 'pointer',
        ...props.style
      }}
    >
      {loading ? (
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="spinner" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}