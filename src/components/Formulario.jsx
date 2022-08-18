import { useState, useEffect } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(paciente);
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    setPacientes([...pacientes, nuevoPaciente]);

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="w-11/12 mx-auto md:w-2/5">
      <h2 className="text-center font-black text-3xl mb-3">
        Seguimiento Pacientes
      </h2>
      <p className="text-center text-lg mb-10">
        Agregar Pacientes {""}
        <span className="text-violet-600 font-bold">Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={hadleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los Campos son Obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            placeholder="Fecha de Alta"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <textarea
            type="date"
            placeholder="Describe los sintomas"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-violet-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-violet-700 cursor-pointer transition duration-300"
        />
      </form>
    </div>
  );
};
