import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-4 bg-[var(--bg)] px-5 text-center text-[var(--ink)]">
      <h1 className="font-[family-name:var(--font-display)] text-5xl">404</h1>
      <p className="text-[var(--muted)]">This portfolio path does not exist.</p>
      <Link
        href="/"
        className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-[var(--bg)]"
      >
        Back home
      </Link>
    </main>
  );
}
