const ErrorAlert = ({msg}) => {
  return (
    <div className="bg-red-600 text-center p-3 mb-3 rounded-md font-bold text-white uppercase">
      <p>{msg}</p>
    </div>
  );
};

export default ErrorAlert;
