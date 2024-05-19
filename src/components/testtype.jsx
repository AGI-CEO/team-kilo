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
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Vibration</span>
          </label>          
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">LO2</span>
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Load Test</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Pull Test</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
        <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Non-Destructive Testing</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Cryo</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Temperature Test</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Combustion Test</span>
          </label> 
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-3">
          <input type="checkbox" name="Checkbox" value="1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">Pressure Test</span>
          </label> 
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
