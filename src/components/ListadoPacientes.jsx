import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {
  return (
    <div className="w-11/12 mx-auto md:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-3xl mb-3">
        Listado de pacientes
      </h2>
      <p className="text-center text-xl mb-10">
        Administra tus {""}
        <span className="text-violet-600 font-bold">Pacientes y Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};
