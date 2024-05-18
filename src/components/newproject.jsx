/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dZFfix0iTEf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewProject() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle>New Project</CardTitle>
          <CardDescription>
            Start a new project or import an existing one.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Link href="/create">
            <Button className="w-full">Create New Project</Button>
          </Link>
          <Button
            className="w-full opacity-50 cursor-not-allowed"
            title="(coming soon)"
            variant="outline"
          >
            Import Project
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
