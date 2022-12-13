import React, { useState, useEffect } from 'react';

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.json())
      .then(data => setResult(data));
  }, []);

  return (
    <div>
      {result && <h1>{result.message}</h1>}
    </div>
  );
}


export default App;
