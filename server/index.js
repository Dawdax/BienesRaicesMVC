import express from "express"
import usuarioRoutes from "./routes/usuario.routes.js"
import cors from "cors"

const app = express()
const port = 3000

//Usando cors para que se pueda conectar cualquiera
app.use(cors());
//Routing 
app.use('/', usuarioRoutes)


//Definiendo el arranque del servidor 
app.listen(port, () => console.log(`El servidor funciona, puerto: ${port}`))