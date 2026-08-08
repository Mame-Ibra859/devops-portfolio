import { CircleCheckBig } from "lucide-react";

export default function Problem() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          1. Le problème
        </h2>
      </div>
      <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-2xl border border-red-900 bg-red-950/20 p-5 sm:p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-red-300 sm:text-2xl">
            Avant Kubernetes
          </h3>
          <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-5 sm:text-base sm:leading-8">
            À l'issue du Lab 01, une image Docker du portfolio est disponible
            sur Docker Hub. Cette image peut être exécutée avec la commande
            <code className="mx-2 rounded bg-neutral-900 px-2 py-1">
              docker run
            </code>
            mais elle reste limitée à un environnement mono-conteneur.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-300 sm:mt-8 sm:space-y-4 sm:text-base">
            <li>• Pas de réplication automatique.</li>
            <li>• Pas de redémarrage en cas de panne.</li>
            <li>• Pas de montée en charge.</li>
            <li>• Pas de séparation logique des ressources.</li>
            <li>• Configuration embarquée dans le conteneur.</li>
            <li>• Gestion difficile des informations sensibles.</li>
            <li>
              • Mises à jour manuelles pouvant provoquer une interruption de
              service.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-green-900 bg-green-950/20 p-5 sm:p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <CircleCheckBig className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-green-300 sm:text-2xl">
              Objectif du laboratoire
            </h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
            Déployer cette image Docker sur une plateforme Kubernetes réelle
            afin de disposer d'une application :
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-300 sm:mt-8 sm:space-y-4 sm:text-base">
            <li>• Répliquée sur plusieurs Pods</li>
            <li>• Accessible via un Service et un Ingress</li>
            <li>• Configurable grâce aux ConfigMaps</li>
            <li>• Sécurisée avec les Secrets</li>
            <li>• Accompannée d'une base PostgreSQL persistante</li>
            <li>• Capable d'effectuer des Rolling Updates</li>
            <li>
              • Capable de revenir automatiquement à une version précédente
              (Rollback)
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 sm:mt-8 sm:p-5">
            <p className="text-sm leading-7 text-cyan-200 sm:text-base">
              Ce laboratoire constitue la première véritable plateforme
              d'exécution du portfolio. Les laboratoires suivants automatiseront
              entièrement son déploiement avec GitOps et FluxCD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
