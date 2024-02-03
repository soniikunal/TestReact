import React, { useState, useEffect } from 'react';

const FunctionalErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error(error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  return children;
};

export default FunctionalErrorBoundary;
