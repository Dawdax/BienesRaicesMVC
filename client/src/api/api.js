import axios from "axios"

export const probandoMensajeRecibido = () => {
    return axios.get('http://localhost:3000/api/mensaje')
}