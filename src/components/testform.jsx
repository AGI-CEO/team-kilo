/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JwJZLB5oWMc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useEffect, useState } from "react";

export default function TestForm({ onSubmit, onBotResponse }) {
  const [botResponse, setBotResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit called"); // Add this line

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    console.log("formValues", formValues); // Add this line

    const data = {
      question: JSON.stringify(formValues),
    };
    console.log("data", data); // Add this line

    try {
      const response = await fetch(
        "https://flowise.seelanglabs.com/api/v1/prediction/402dea8b-57bb-4be7-aed7-88cef9dc53d7",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setBotResponse(responseData);
      if (onBotResponse) {
        onBotResponse(responseData);
      }
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6"
      >
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
            name="vibration" // Add this line
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
            name="cryo" // Add this line
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
            name="transportation" // Add this line
            placeholder="Enter transportation parameters"
            type="text"
          />
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
