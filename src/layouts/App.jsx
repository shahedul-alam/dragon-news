import { Outlet } from "react-router-dom"
import HomeHeader from "../pages/home/HomeHeader" 

function App() {

  return (
    <div className="font-poppins"> 
      <HomeHeader />
      <Outlet />
    </div>
  )
}

export default App
