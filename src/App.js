import React from 'react';
import './App.css';
import{ Form } from '@unform/web';

function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      
      <Form>
        <Input name="email"/>
      </Form>
    </div>
  );
}

export default App;
