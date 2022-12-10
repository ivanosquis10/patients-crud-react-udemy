const Button = () => {
  return (
    <div className="flex justify-between mt-5 ">
      <button
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md uppercase"
      >
        Editar
      </button>
      <button
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md uppercase"
      >
        Eliminar
      </button>
    </div>
  );
};

export default Button;
