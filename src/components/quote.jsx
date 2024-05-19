/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2XevbCOkiFu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export default function Quote() {
  return (
    <Card className="flex flex-col w-full mx-auto mt-40 max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <CardHeader className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-200">
          Spacify LETF Quote
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8 px-6">
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            $
          </span>
          <span className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text animate-price">
            8,990
          </span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Our price reflects the cutting-edge technology and expertise required
          to deliver a safe and efficient low-earth transfer flight.
        </p>
      </CardContent>
    </Card>
  );
}
