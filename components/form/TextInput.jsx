"use client";

export default function TextInput({
  label = null,
  type = "text",
  value = "",
  placeholder = "",
  error = null,
  required = false,
  onChange = (event) => {},
} = {}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {error && (
        <label className="block mb-2 text-sm font-medium text-red-400">
          {error}
        </label>
      )}
    </div>
  );
}
