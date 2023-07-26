'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const handleReset = () => reset();

  return (
    <div>
      <h2>This kind of error occured:</h2>
      <h2>{error.message}</h2>
      <button type="button" onClick={handleReset}>
        Try again
      </button>
    </div>
  );
}
