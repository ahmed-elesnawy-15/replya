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
      <section className="px-8 py-20">
  <h2 className="text-center text-4xl font-bold">
    Everything your business needs
  </h2>

  <div className="mt-12 grid gap-8 md:grid-cols-3">
    <div className="rounded-2xl bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        🤖 AI Customer Support
      </h3>
      <p className="mt-4 text-slate-300">
        Reply to customers instantly with an AI assistant.
      </p>
    </div>

    <div className="rounded-2xl bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        📄 Business Knowledge
      </h3>
      <p className="mt-4 text-slate-300">
        Upload your information and let Replya learn your business.
      </p>
    </div>

    <div className="rounded-2xl bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        ⚡ Available 24/7
      </h3>
      <p className="mt-4 text-slate-300">
        Help your customers anytime without waiting.
      </p>
    </div>
  </div>
</section>
<section className="px-8 py-20">
  <h2 className="text-center text-4xl font-bold">
    How Replya works
  </h2>

  <div className="mt-12 grid gap-8 md:grid-cols-3">
    <div className="text-center">
      <div className="text-5xl">📄</div>
      <h3 className="mt-4 text-2xl font-bold">
        Upload your data
      </h3>
      <p className="mt-3 text-slate-300">
        Add your services, prices, and business information.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl">🤖</div>
      <h3 className="mt-4 text-2xl font-bold">
        AI learns your business
      </h3>
      <p className="mt-3 text-slate-300">
        Replya understands your information and answers customers.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl">🚀</div>
      <h3 className="mt-4 text-2xl font-bold">
        Grow faster
      </h3>
      <p className="mt-3 text-slate-300">
        Automate conversations and focus on your business.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}