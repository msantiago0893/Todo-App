import React, { useContext } from 'react';
import { UserContext } from './context/userContext';

export const Home = () => {

  const { user } = useContext(UserContext);
  return (
    <>
      <h3>Datos</h3>
      <p>Nombre: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </>
  )
}
