export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <h2 className="text-2xl font-bold">
          Replya
        </h2>

        <div className="flex gap-8 text-slate-300">
          <a href="#">Features</a>
          <a href="#">How it works</a>
        </div>

        <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black">
          Get Started
        </button>
      </nav>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold">
          Your AI employee for Arabic businesses
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-300">
          Replya helps businesses answer customers,
          automate conversations, and grow 24/7.
        </p>

        <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-black">
          Start Building
        </button>
      </section>
    </main>
  );
}