import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    async function toggle() {
      fetch("http://10.0.0.90:3000/lights/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ action: "TOGGLE" })
      })
    }

    toggle();
  })

  return (
    <div>
      Hello, world!
    </div>
  );
}

export default App;
