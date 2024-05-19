/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JwJZLB5oWMc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useEffect, useState } from "react";

export default function TestForm({ onSubmit, onBotResponse }) {
  const [botResponse, setBotResponse] = useState(null);

  useEffect(() => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch("/api/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        setBotResponse(responseData);
        onBotResponse(responseData);
      } catch (error) {
        console.error(error);
      }

      onSubmit();
    });

    return () => {
      form.removeEventListener("submit", onSubmit);
    };
  }, [onSubmit, onBotResponse]);

  return (
    <div className="w-full max-w-md mx-auto my-12">
      <form className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6">
        <div className="space-y-2">
          <p className="text-gray-500 dark:text-gray-400">
            Please fill out the following information about your widget.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium"
              htmlFor="vibration"
            >
              What are the expected safe vibration parameters of your widget?
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
              id="vibration"
              placeholder="Enter vibration parameters"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium"
              htmlFor="cryo"
            >
              What are the expected safe cryo parameters for your widget?
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
              id="cryo"
              placeholder="Enter cryo parameters"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium"
              htmlFor="transportation"
            >
              What are the expected safe parameters of your widget for
              transportation from the staging facility to VAB and then to launch
              pad?
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
              id="transportation"
              placeholder="Enter transportation parameters"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
