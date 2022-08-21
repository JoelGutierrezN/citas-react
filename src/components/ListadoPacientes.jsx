import { useEffect } from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  useEffect(() => {
    if (pacientes.length > 0) console.log("Nuevo Paciente");
  }, [pacientes]);

  return (
    <div className="w-11/12 mx-auto md:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl mb-3">
            Listado de pacientes
          </h2>
          <p className="text-center text-xl mb-10">
            Administra tus {""}
            <span className="text-violet-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl mb-3">
            No Hay Pacientes
          </h2>
          <p className="text-center text-xl mb-10">
            Agregar Pacientes {""}
            <span className="text-violet-600 font-bold">
              Apareceran en Este Lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
