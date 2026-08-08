import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GitBranchPlus } from "lucide-react";
import { Header } from "@/components/Header";

export default function PlatformFoundationLab() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO */}
      <Header />

      <section className="border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            LAB 01
          </span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Platform Foundation
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-neutral-300">
            Ce laboratoire pose les fondations de l&apos;ensemble du portfolio.
            L&apos;application Next.js que vous consultez actuellement est
            construite, validée, conteneurisée et publiée automatiquement grâce
            à cette chaîne CI/CD. Chaque évolution du site suit le même
            processus : validation du code, contrôle qualité, construction de
            l&apos;image Docker puis publication automatisée via GitHub Actions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-24">
        {/* INTRO */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">
            {/* Le recruteur arrive ici */}
          </h2>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="mb-6 text-neutral-300">
              L&apos;objectif de ce laboratoire est de mettre en place une
              chaîne CI/CD moderne similaire à celle utilisée dans de nombreuses
              équipes DevOps afin de construire l&apos;image Docker.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">Application</h3>

                <p className="mt-2 text-sm text-neutral-400">Next.js 16</p>
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">Versioning</h3>

                <p className="mt-2 text-sm text-neutral-400">Git & GitHub</p>
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">Livraison</h3>

                <p className="mt-2 text-sm text-neutral-400">
                  GitHub Actions + Docker Hub
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEME */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">1. Le problème</h2>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-neutral-300 mb-6">
              Avant l&apos;automatisation de la chaîne CI/CD, chaque
              modification du projet nécessitait plusieurs opérations manuelles
              :
            </p>

            <ul className="space-y-3 text-neutral-300">
              <li>• Vérifier le format du code</li>
              <li>• Exécuter les commandes de build</li>
              <li>• Lancer les tests</li>
              <li>• Construire l&apos;image Docker</li>
              <li>• Publier l&apos;image manuellement</li>
            </ul>

            <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <p className="font-medium text-cyan-400">Objectif</p>

              <p className="mt-2 text-neutral-300">
                Automatiser complètement la chaîne afin qu&apos;un simple push
                Git déclenche toutes les vérifications nécessaires avant la
                publication d&apos;une image Docker.
              </p>
            </div>
          </div>
        </section>

        {/* ARCHI */}

        <section>
          <h2 className="text-2xl md:text-3xl font-bold">
            2. Structure du projet
          </h2>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="mb-6 text-neutral-300">
              Le projet est organisé de manière à séparer clairement le code
              applicatif, les pipelines CI/CD et les artefacts nécessaires à la
              conteneurisation.
            </p>

            <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-6 text-sm text-neutral-300">
              {`devops-portfolio
├── app/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── pr-validation.yml
│       └── release.yml
├── Dockerfile
├── package.json
└── README.md`}
            </pre>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">app/</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Application Next.js et composants de l&apos;interface.
                </p>
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">
                  .github/workflows
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Automatisation CI/CD via GitHub Actions.
                </p>
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">Dockerfile</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Construction de l&apos;image Docker utilisée pour le
                  déploiement.
                </p>
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                <h3 className="font-semibold text-cyan-400">package.json</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Gestion des dépendances et des scripts du projet.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="text-sm text-neutral-400">
                L&apos;ensemble du code source, des workflows GitHub Actions et
                de la configuration Docker utilisés dans ce laboratoire sont
                disponibles publiquement.
              </p>

              <Link
                href="https://github.com/mameibra/devops-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20"
              >
                <GitBranchPlus size={16} />
                Consulter le dépôt GitHub
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              3. Architecture de livraison
            </h2>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="mb-6 text-neutral-300">
              Une fois la structure du dépôt définie, l&apos;objectif est
              d&apos;automatiser l&apos;ensemble du cycle de livraison. Le
              projet s&apos;appuie sur une stratégie Git simple : chaque
              évolution est développée dans une branche dédiée, validée
              automatiquement puis intégrée via Pull Request avant publication.
            </p>

            <h3 className="mb-4 text-xl font-semibold">
              Stratégie de branches
            </h3>

            <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-6 text-sm text-neutral-300">
              {`main
│
├── feature/home
│
├── feature/projects-details
│
├── feature/...
│
├── ci/pre-validation
│
└── ci/release`}
            </pre>

            <p className="mt-4 text-neutral-400">
              Chaque fonctionnalité possède sa propre branche. Les pipelines
              CI/CD sont également versionnés afin de pouvoir faire évoluer les
              workflows sans impacter directement la branche principale.
            </p>

            <h3 className="mt-10 mb-4 text-xl font-semibold">
              Flux complet de livraison
            </h3>

            <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-6 text-sm text-neutral-300">
              {`Developer
    │
    │ git push feature/*
    ▼
GitHub Repository
    │
    ▼
GitHub Actions (CI)
┌───────────────────────┐
│ Prettier              │
│ ESLint                │
│ TypeScript            │
│ Build                 │
└───────────────────────┘
    │
    ▼
Pull Request
    │
    ▼
PR Validation Workflow
    │
    ▼
Merge main
    │
    ▼
Release Workflow
    │
    ▼
Docker Build
    │
    ▼
Docker Hub`}
            </pre>

            <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <h4 className="font-semibold text-cyan-400">
                Ce que cela apporte
              </h4>

              <p className="mt-3 text-neutral-300">
                Aucun déploiement n&apos;est réalisé manuellement. Chaque
                modification suit le même processus : validation du code,
                construction de l&apos;application, revue par Pull Request,
                génération de l&apos;image Docker puis publication sur Docker
                Hub. Le site que vous consultez actuellement est issu de cette
                chaîne automatisée.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">4. Les Workflows</h2>
          </div>

          <p className="mb-8 text-neutral-300">
            Les pipelines GitHub Actions automatisent l&apos;ensemble du cycle
            de livraison. Chaque workflow possède une responsabilité précise :
            validation du code, contrôle des Pull Requests et publication
            automatique de nouvelles versions.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-10">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-cyan-400 text-sm font-medium">ci.yml</div>

              <h3 className="mt-2 text-lg font-semibold">Validation Push</h3>

              <p className="mt-2 text-neutral-400 text-sm">
                Vérifie automatiquement chaque push.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-cyan-400 text-sm font-medium">
                pr-validation.yml
              </div>

              <h3 className="mt-2 text-lg font-semibold">
                Pull Request Validation
              </h3>

              <p className="mt-2 text-neutral-400 text-sm">
                Contrôle qualité avant fusion.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-cyan-400 text-sm font-medium">
                release.yml
              </div>

              <h3 className="mt-2 text-lg font-semibold">Release Pipeline</h3>

              <p className="mt-2 text-neutral-400 text-sm">
                Construction et publication Docker.
              </p>
            </div>
          </div>

          <Accordion className="space-y-4">
            <AccordionItem
              value="ci"
              className="rounded-2xl border border-neutral-800 bg-neutral-900 px-6"
            >
              <AccordionTrigger>Workflow 1 - ci.yml</AccordionTrigger>

              <AccordionContent>
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                    Push
                  </span>

                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs">
                    Prettier
                  </span>

                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs">
                    ESLint
                  </span>

                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs">
                    TypeScript
                  </span>

                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs">
                    Build
                  </span>
                </div>

                <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-5 text-sm">
                  {`name: CI

on:
  push:

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

      - run: npm ci

      - run: npm run format:check

      - run: npm run lint

      - run: npm run type-check

      - run: npm run build`}
                </pre>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="pr"
              className="rounded-2xl border border-neutral-800 bg-neutral-900 px-6"
            >
              <AccordionTrigger>
                Workflow 2 - pr-validation.yml
              </AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-5 text-sm">
                  {`name: Pull Request Validation

on:
  pull_request:
    branches:
      - main

jobs:
  validation:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: npm ci

      - run: npm run lint

      - run: npm run type-check

      - run: npm run build`}
                </pre>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="release"
              className="rounded-2xl border border-neutral-800 bg-neutral-900 px-6"
            >
              <AccordionTrigger>Workflow 3 - release.yml</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-5 text-sm">
                  {`name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: docker/login-action@v3

      - uses: docker/build-push-action@v5

        with:
          push: true
          tags: portfolio:latest`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">5. Docker</h2>
          </div>

          <p className="mb-8 text-neutral-300">
            Une fois toutes les validations terminées et la Pull Request
            fusionnée dans la branche principale, le workflow de release
            construit automatiquement une image Docker de l&apos;application.
            Cette image est ensuite publiée dans Docker Hub afin de pouvoir être
            utilisée prochaine dans Kubernetes.
          </p>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-6 text-sm text-neutral-300">
              {`release.yml
      │
      ▼
Docker Build
      │
      ▼
Docker Hub
      │
      ▼
Kubernetes
      │
      ▼
Portfolio en production`}
            </pre>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="mb-3 font-semibold text-cyan-400">
                Construction de l'image
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-xs sm:text-sm">
                <code className="whitespace-pre-wrap break-all">
                  {`docker build -t mameibra/devops-portfolio:latest .`}
                </code>
              </pre>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="mb-3 font-semibold text-cyan-400">
                Publication Docker Hub
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-xs sm:text-sm">
                <code className="whitespace-pre-wrap break-all">
                  {`docker push mameibra/devops-portfolio:latest`}
                </code>
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="text-neutral-300">
              Ces commandes sont exécutées automatiquement par GitHub Actions.
              Elles permettent de produire une image versionnée, reproductible
              et déployable sur DockerHub. Le site que vous consultez
              actuellement est issu de cette chaîne d&apos;automatisation.
            </p>
          </div>
        </section>

        {/* DIFFICULTES */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              6. Difficultés rencontrées
            </h2>{" "}
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <ul className="space-y-5">
              <li>
                <strong className="text-white">Conflits ESLint</strong>
                <p className="text-neutral-400">
                  Harmonisation des règles entre Next.js, TypeScript et
                  Prettier.
                </p>
              </li>

              <li>
                <strong className="text-white">
                  Gestion des secrets GitHub
                </strong>
                <p className="text-neutral-400">
                  Configuration sécurisée des identifiants Docker Hub dans
                  GitHub Actions.
                </p>
              </li>

              <li>
                <strong className="text-white">Ordre des workflows</strong>
                <p className="text-neutral-400">
                  Séparation claire entre validation, merge et release afin
                  d&apos;éviter les déploiements non contrôlés.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* RESULTAT */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">7. Résultat</h2>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>
                  Chaque Push déclenche automatiquement les validations.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>Chaque Pull Request est contrôlée avant fusion.</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>Chaque Merge sur main déclenche une release.</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>
                  Une image Docker versionnée est publiée automatiquement.
                </span>
              </div>
            </div>

            <p className="mt-8 text-neutral-300">
              Ce laboratoire établit la fondation DevOps utilisée par tous les
              laboratoires suivants du portfolio. Il démontre la maîtrise des
              principes Git, CI/CD, Docker et automatisation des déploiements.
            </p>
          </div>
          {/* Liens vers les laboratoires suivants a droite */}
          <div className="mt-8 flex justify-end">
            <Link
              href="/labs/02"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20"
            >
              <span>Suivant : Kubernetes</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
