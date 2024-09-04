import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="container w-full max-w-sm">
      <h1 className="text-sm lg:flex-grow">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="block text-gray-600 text-lg font-bold mb-2">
          Name:{" "}
          <input
            name="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="block text-gray-600 text-lg font-bold mb-2">
          Email:{" "}
          <input
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="block text-gray-600 text-lg font-bold mb-2">
          Password:{" "}
          <input
            name="password"
            type="password"
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="block text-gray-600 text-lg font-bold mb-2">
          Password confirmation:{" "}
          <input
            name="password_confirmation"
            type="password"
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-green-700 text-white font-bold rounded py-2 px-4"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
