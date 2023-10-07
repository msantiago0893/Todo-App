import React, { useContext } from 'react'
import { UserContext } from './context/userContext';

export const Login = () => {

  const data  = useContext(UserContext);
  console.log('Data: ', data);

  const { user, setUser }  = useContext(UserContext);
  return (
    <>
    <h1>LOGIN</h1>

    <pre>
      { JSON.stringify(user, null, 3) }
    </pre>

    <button onClick={() => setUser({id: 1, name: "Marco Antonio", email: "sfmarco08@gmail.com"})}>
      Establecer usuario
    </button>
    </>

  )
}
