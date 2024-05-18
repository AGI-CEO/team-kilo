/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wc6WP067Fie
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export default function Dash() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <RocketIcon className="w-6 h-6" />
          <span className="sr-only">Spacify</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Launches
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Analytics
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <form className="flex-1">
            <Input
              className="bg-white dark:bg-gray-950"
              placeholder="Search launches..."
            />
            <Button className="sr-only" type="submit">
              Submit
            </Button>
          </form>
          <Button>Add New</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card className="animate-fade-in">
            <CardHeader className="flex flex-row items-center gap-4">
              <RocketIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Falcon 9</CardTitle>
                <CardDescription>Starlink Mission</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>View Telemetry</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    June 15, 2023
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Payload: 60 Starlink Satellites
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Test Type: Static Fire
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CloudSunIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Sunny, 75°F
                  </span>
                </div>
              </div>
            </CardContent>
            <div className="sticky bottom-0">
              <Progress
                className="h-2 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                value={75}
              />
            </div>
          </Card>
          <Card className="animate-fade-in">
            <CardHeader className="flex flex-row items-center gap-4">
              <RocketIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Falcon Heavy</CardTitle>
                <CardDescription>Crew Dragon Mission</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>View Telemetry</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    July 20, 2023
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Payload: Crew Dragon Capsule
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Test Type: Hot Fire
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CloudRainIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Scattered Showers, 70°F
                  </span>
                </div>
              </div>
            </CardContent>
            <div className="sticky bottom-0">
              <Progress
                className="h-2 bg-gradient-to-r from-secondary to-secondary/50 rounded-full"
                value={40}
              />
            </div>
          </Card>
          <Card className="animate-fade-in">
            <CardHeader className="flex flex-row items-center gap-4">
              <RocketIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Starship</CardTitle>
                <CardDescription>Orbital Test Flight</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>View Telemetry</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    August 1, 2023
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Payload: Starship Prototype
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GaugeIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Test Type: Flight Readiness
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CloudSunIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Mostly Sunny, 80°F
                  </span>
                </div>
              </div>
            </CardContent>
            <div className="sticky bottom-0">
              <Progress
                className="h-2 bg-gradient-to-r from-warning to-warning/50 rounded-full"
                value={20}
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CloudRainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function CloudSunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
