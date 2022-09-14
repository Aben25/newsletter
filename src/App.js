import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form';

export const UserContext = createContext();
function App() {
const [data,setData]=useState({ name: '', email: '' });

  return (
    <div className="App">
      <UserContext.Provider value={{data,setData}}>
      <Form />
      </UserContext.Provider>
    </div>
  );
}

export default App;
