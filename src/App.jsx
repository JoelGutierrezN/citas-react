
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from './components/ListadoPacientes';

export const App = () => {
  return (
    <div className="container mx-auto mt-20">
        <Header />
        <div className="md:flex mt-10">
          <Formulario />
          <ListadoPacientes />
        </div> 
    </div>
  )
}
