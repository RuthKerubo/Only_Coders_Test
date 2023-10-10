export default function ButtonSecondary({
  type = "button",
  children = null,
  onClick = () => {},
} = {}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white font-bold bg-secondary hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {children}
    </button>
  );
}
