import react from "react"
import {Route, Routes} from "react-router-dom"
import LoginUser from "./pages/auth/LoginUser"
import ErrorPages from "./pages/ErrorPages"


const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={< LoginUser />} />
      <Route path="*" element={< ErrorPages />} />
    </Routes>
  )
}

export default App;