export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100 sm:px-8 lg:px-12">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
        <section className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            👋 Bonjour
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Je suis <span className="text-cyan-600">XXX</span>
          </h1>
          <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
            DevOps Engineer
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Compétences</h2>
          <ul className="grid gap-2 text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>✔ Docker</li>
            <li>✔ Kubernetes</li>
            <li>✔ Terraform</li>
            <li>✔ GitHub Actions</li>
            <li>✔ GitLab CI</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Projet</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Ce portfolio est automatiquement :
          </p>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>✓ Buildé avec GitHub Actions</li>
            <li>✓ Dockerisé</li>
            <li>✓ Publié sur Docker Hub</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            GitHub
          </p>
          <a
            href="https://github.com/toncompte"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-lg font-medium text-cyan-600 transition hover:text-cyan-500"
          >
            github.com/toncompte
          </a>
        </section>
      </main>
    </div>
  );
}
