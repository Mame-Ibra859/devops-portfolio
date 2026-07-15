import Link from "next/link";
import type { ElementType } from "react";

import {
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: ElementType;
  active?: boolean;
};

const technologies: Technology[] = [
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Helm", icon: SiHelm },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab CI", icon: SiGitlab },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "Grafana", icon: SiGrafana },
  { name: "Prometheus", icon: SiPrometheus },
  { name: "FluxCD", icon: SiGithubactions },
  {
    name: "Longhorn",
    icon: SiGithubactions,
    active: false,
  },
];

const labs = [
  {
    id: "01",
    title: "Platform Foundation",
    status: "Terminé",
    techs: ["Docker", "GitHub Actions"],
  },
  {
    id: "02",
    title: "Kubernetes Platform",
    status: "Terminé",
    techs: ["Kubernetes", "Helm"],
  },
  {
    id: "03",
    title: "GitOps Platform",
    status: "Terminé",
    techs: ["FluxCD", "Kubernetes"],
  },
  {
    id: "04",
    title: "Terraform Lab",
    status: "Terminé",
    techs: ["Terraform"],
  },
  {
    id: "05",
    title: "Ansible Lab",
    status: "Terminé",
    techs: ["Ansible"],
  },
  {
    id: "06",
    title: "Jenkins Lab",
    status: "En cours",
    techs: ["Jenkins"],
  },
  {
    id: "07",
    title: "GitLab CI/CD",
    status: "En cours",
    techs: ["GitLab CI", "Docker"],
  },
  {
    id: "08",
    title: "Monitoring Platform",
    status: "En cours",
    techs: ["Grafana", "Prometheus"],
  },
];

function getTech(name: string) {
  return technologies.find((tech) => tech.name === name);
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}

      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Mame Ibra FAYE
            <span className="text-cyan-400">.</span>
          </Link>

          <nav className="flex items-center gap-8 text-sm text-neutral-400">
            <Link href="/" className="transition hover:text-cyan-400">
              Accueil
            </Link>

            <Link href="#labs" className="transition hover:text-cyan-400">
              Projets
            </Link>

            <Link href="#about" className="transition hover:text-cyan-400">
              À propos
            </Link>

            <Link href="/contact" className="transition hover:text-cyan-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center">
            <span className="mb-5 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              DevOps Engineer Portfolio
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
              Mame Ibra Faye
            </h1>

            <p className="text-lg leading-8 text-neutral-300">
              Développeur orienté DevOps.
              <br />
              Je construis des plateformes cloud modernes avec Docker,
              Kubernetes, GitOps, Terraform, Ansible et les outils CI/CD.
            </p>

            <p id="about" className="mt-5 text-neutral-400">
              Ce portfolio présente des laboratoires réalisés dans des
              conditions proches d'une infrastructure d'entreprise. Chaque
              projet applique l'automatisation, l'observabilité et
              l'infrastructure as code.
            </p>
          </div>

          {/* TECHNOLOGIES */}

          <div>
            <h2 className="mb-3 text-2xl font-bold">Technologies</h2>

            <p className="mb-5 text-neutral-400">
              Stack utilisée dans mes laboratoires.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-3 rounded-xl border p-3 ${
                      tech.active === false
                        ? "border-neutral-800 bg-neutral-900 text-neutral-500"
                        : "border-neutral-700 bg-neutral-900"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={
                        tech.active === false
                          ? "text-neutral-500"
                          : "text-cyan-400"
                      }
                    />

                    <span className="text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LABS */}

      <section id="labs" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-3xl font-bold">Laboratoires</h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-cyan-500/50"
            >
              <div className="mb-4 flex justify-between">
                <span className="font-mono text-cyan-400">{lab.id}</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    lab.status === "Terminé"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {lab.status}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-semibold">{lab.title}</h3>

              <div className="flex flex-wrap gap-2">
                {lab.techs.map((techName) => {
                  const tech = getTech(techName);

                  if (!tech) return null;

                  const Icon = tech.icon;

                  return (
                    <div
                      key={techName}
                      className="flex items-center gap-2 rounded-lg bg-neutral-800 px-2 py-1"
                    >
                      <Icon size={14} className="text-cyan-400" />

                      <span className="text-xs">{techName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
