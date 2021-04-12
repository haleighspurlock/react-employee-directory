import React from 'react';
import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';

function App() {
  return (
    <>
      <div style={{
        paddingLeft: 50,
        paddingRight: 50
      }}>
        <Header />
        <EmployeeDirectory />
      </div>
    </>
  );
}

export default App;
