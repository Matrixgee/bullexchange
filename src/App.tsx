import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/routes"

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
