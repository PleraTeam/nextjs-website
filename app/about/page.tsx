import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Next.js App",
  description: "Learn more about our Next.js application and team",
};

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
          />
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We're building the future of web development with Next.js, creating 
              fast, scalable, and user-friendly applications that make a difference.
            </p>
            
            <h2 className="text-2xl font-semibold">What We Do</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Modern web application development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Performance optimization and SEO
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                User experience design
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Next.js 14+</li>
                  <li>React 18</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Vercel</li>
                  <li>Git</li>
                  <li>ESLint</li>
                  <li>Prettier</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
          >
            ← Back to Home
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}