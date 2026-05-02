"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
      <span className="text-7xl font-bold font-heading text-red-500 sm:text-8xl">Oops</span>
      <h1 className="mt-4 text-2xl font-bold font-heading sm:text-3xl">Something Went Wrong</h1>
      <p className="mt-3 text-neutral-500 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-xl bg-blue-accent px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-accent/25"
      >
        Try Again
      </button>
    </main>
  );
}
