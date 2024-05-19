/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fEvixmoNvTO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
export default function EmailForm() {
  return (
    <section className="flex flex-col items-center justify-center mt-40 px-4 md:px-6">
      <div className="container max-w-md w-full space-y-6">
        <div className="bg-[#0D1117] rounded-md shadow-sm">
          <div className="space-y-4 animate-fade-in p-4">
            <div className="text-center space-y-2">
              <h1 className="text-xl font-bold text-white">
                Try Spacify for Free
              </h1>
              <p className="text-gray-400">
                LETF-compliant submission platform w/AI driven reports
                automation–Lowering costs and increasing efficiencies.
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md">
                <input
                  className="block w-full px-4 py-3 rounded-md bg-[#0D1117] border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <Link href="/dashboard">
              <button
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce"
                type="button"
              >
                Try for Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
