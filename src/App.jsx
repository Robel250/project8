
import React, { createContext } from 'react';
import Child from './Clild'; 

export const MyContext = createContext();

function App() {
  const text = "Hello, it is from APP!";

  return (
    <div>
      <MyContext.Provider value={text}>
        <h1>Parent Component</h1>
       
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;
