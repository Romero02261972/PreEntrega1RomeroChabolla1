import { ContainerBox } from "./components/ContainerBox/ContainesBox"
import { NavBar } from "./components/NavBar/NavBar"

export const App = () => {
  return (
   <>
   <NavBar />
   <ContainerBox message={"Bienvenidos"}/>
   </>
  )
}

