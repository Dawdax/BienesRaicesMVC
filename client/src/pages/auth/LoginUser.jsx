import React, { useEffect, useState } from 'react'
import {probandoMensajeRecibido} from "../../api/api.js"

const LoginUser = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    async function LoadMensaje() {
      try {
        const response = await probandoMensajeRecibido();
        setData(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    LoadMensaje();
  
  }, []);
  

  return (
    <div>
      <p className=' uppercase'> {data.mensaje} </p>
    </div>
  )
}

export default LoginUser