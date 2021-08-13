import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <form className="bg-violet-200 shadow-lg border border-yellow-300 rounded font-bold px-10 pt-10 pb-10 mb-4">
        <h1 className="block text-lg text-center mb-4">Contact us</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="emaill"
            type="email"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
