'use client';

import { useState } from 'react';

export default function YourComponent() {
  const [poem, setPoem] = useState('');

  const handleClick = async () => {
    const response = await fetch('/api/google');
    const data = await response.json();
    setPoem(data.poem);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Poem</button>
      {poem && <p>{poem}</p>}
    </div>
  );
}