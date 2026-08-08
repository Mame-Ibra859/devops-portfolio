import { AlertTriangle } from "lucide-react";

export default function Difficulties() {
  return (
    <section>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
        <div className="flex items-center gap-3">
          <AlertTriangle size={24} className="text-amber-400" />

          <h3 className="text-xl font-bold sm:text-2xl">
            5. Difficultés rencontrées
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
          Plusieurs problématiques ont été rencontrées lors de la mise en place
          de la plateforme. Elles ont nécessité des ajustements de configuration
          ainsi qu'une meilleure compréhension du fonctionnement interne de
          Kubernetes.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-neutral-300 sm:mt-8 sm:space-y-4 sm:text-base">
          <li>
            • Configuration et validation des ressources Kubernetes
            (Deployments, Services et Ingress).
          </li>

          <li>
            • Compréhension du routage assuré par Traefik et du rôle des Ingress
            Controllers.
          </li>

          <li>
            • Gestion des variables d'environnement entre ConfigMaps, Secrets et
            conteneurs.
          </li>

          <li>
            • Débogage des problèmes de connectivité entre l'application Next.js
            et PostgreSQL.
          </li>

          <li>
            • Validation des mises à jour progressives (Rolling Updates) et des
            mécanismes de rollback.
          </li>
        </ul>
      </div>
    </section>
  );
}
