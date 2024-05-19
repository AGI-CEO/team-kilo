/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M5LLBgXUcqx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestType() {
  return (
    <div className="flex flex-col mt-40 mx-auto max-w-3xl bg-white max-w-[600px] dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8 lg:p-10 space-y-6">
      <h2 className="text-2xl font-bold text-center">
        What LETF tests do you need to run?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Vibration</span>
          </label>
          
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">LO2</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">Load test</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">Pull test</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">
            Payload Transporter
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">
            Pressure test
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">
            Temperature test
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">
            Combustion test
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-checked:opacity-100 transition-opacity duration-200">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-gray-700 dark:text-gray-300">Cryo</span>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/test-form">
          <Button>Next</Button>
        </Link>{" "}
      </div>
    </div>
  );
}
