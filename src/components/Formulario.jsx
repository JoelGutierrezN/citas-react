export const Formulario = () => {
  return (
    <div className="w-11/12 mx-auto md:w-2/5">
      <h2 className="text-center font-black text-3xl mb-3">
        Seguimiento Pacientes
      </h2>
      <p className="text-center text-lg mb-10">
        Agregar Pacientes {""}
        <span className="text-violet-600 font-bold">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">
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
            placeholder="Email Contacto Propietario"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            id="alta"
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
