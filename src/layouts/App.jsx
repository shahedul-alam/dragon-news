import { Outlet } from "react-router-dom"
import HomeHeader from "../pages/home/HomeHeader" 

function App() {

  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  )
}

export default App
