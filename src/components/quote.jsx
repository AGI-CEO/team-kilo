/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2XevbCOkiFu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Quote({ botResponse }) {
  console.log("botResponse", botResponse);
  //const quote = JSON.botResponse;
  const quotePrice =
    botResponse && botResponse.Price ? botResponse.Price : "953,153";
  console.log("price", quotePrice);
  const quoteJustification =
    botResponse && botResponse.PriceJustification
      ? botResponse.PriceJustification
      : "The cost estimate is based on the expected hours of work for engineers and the use of equipment for each test. Given the complexity and the parameters involved, a markup of 10% has been added for contingency and overhead.";
  return (
    <>
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
              {quotePrice}
            </span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
            {quoteJustification}
          </p>
        </CardContent>
        <Link href="/dashboard">
          <Button className="w-full mt-4">Return to Dashboard</Button>
        </Link>
      </Card>
    </>
  );
}
