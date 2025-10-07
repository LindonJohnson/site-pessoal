import { ChevronDown, icons, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <icons.Wrench />
      <h1 className="  text-4xl font-bold text-foreground mb-4">
         {/* Back Button */}
              <a
                href="/"
                className="fixed top-8 left-8 group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 z-50"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-sans text-sm font-light">Voltar</span>
              </a>
        <center>Ainda estou fazendo isso!!!🧟</center>
      </h1>
      <p className="text-muted-foreground text-lg text-center max-w-2xl">
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFpcXA5b3hybXYxeGw1ZWtta2d3bTBraTVydW5mczduYjNkOGs1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bJ4TVNYNUympPgcpem/giphy.gif" alt="" />
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2I3MzY4Y3JkY3VoN2U5OWNsZGFtZHVlZGo5bHJ1aWgyZjlzbXBvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oYQ9HRm5Mo7VXeMNVR/giphy.gif" alt="" />
        
      </p>
    </div>
  );
}
