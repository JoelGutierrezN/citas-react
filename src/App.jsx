import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-10">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  );
};
