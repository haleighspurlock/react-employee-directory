import React from 'react';
import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
    <Container>
        <Header />
        <EmployeeDirectory />
    </Container>
    </>
  );
}

export default App;
