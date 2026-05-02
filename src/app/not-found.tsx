import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
      <span className="text-8xl font-bold font-heading text-blue-accent sm:text-9xl">404</span>
      <h1 className="mt-4 text-2xl font-bold font-heading sm:text-3xl">Page Not Found</h1>
      <p className="mt-3 text-neutral-500 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-accent px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-accent/25"
      >
        Back to Home
      </Link>
    </main>
  );
}
