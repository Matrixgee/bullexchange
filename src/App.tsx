import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/routes"

const App = () => {
  console.log("API", import.meta.env.VITE_DEVE_URL  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
