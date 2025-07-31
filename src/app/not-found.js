// pages/404.tsx
"use client";

import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  )
}
