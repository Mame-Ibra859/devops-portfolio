const components = [
    {
        name: "Namespace",
        role: "Isoler l'application dans son propre espace logique.",
        justification:
            "Séparation claire entre le frontend Next.js et PostgreSQL afin de simplifier l'administration.",
    },
    {
        name: "Deployment",
        role: "Créer et maintenir les Pods du portfolio.",
        justification:
            "Garantit le maintien de trois réplicas et permet les Rolling Updates.",
    },
    {
        name: "Pods",
        role: "Exécuter l'application Next.js.",
        justification:
            "Chaque Pod exécute exactement la même image Docker construite lors du Lab 01.",
    },
    {
        name: "ReplicaSet",
        role: "Maintenir le nombre de Pods demandé.",
        justification:
            "Créé automatiquement par le Deployment pour garantir la haute disponibilité.",
    },
    {
        name: "Service",
        role: "Fournir une adresse réseau stable.",
        justification:
            "Les Pods étant éphémères, le Service offre un point d'accès permanent et répartit les requêtes.",
    },
    {
        name: "Ingress",
        role: "Exposer l'application vers Internet.",
        justification:
            "Toutes les requêtes HTTP transitent par Traefik avant d'être redirigées vers le Service.",
    },
    {
        name: "ConfigMap",
        role: "Centraliser la configuration.",
        justification:
            "Les paramètres non sensibles sont séparés de l'image Docker.",
    },
    {
        name: "Secret",
        role: "Stocker les informations sensibles.",
        justification:
            "Le mot de passe PostgreSQL n'est jamais intégré directement dans les manifests.",
    },
    {
        name: "StatefulSet",
        role: "Déployer PostgreSQL.",
        justification:
            "Une base de données nécessite une identité stable et un stockage persistant.",
    },
    {
        name: "PersistentVolumeClaim",
        role: "Conserver les données.",
        justification:
            "Les données survivent à la suppression ou au redémarrage du Pod PostgreSQL.",
    },
];

export default function ComponentsTable() {
    return (
        <section>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                3. Les composants Kubernetes
            </h2>

            <p className="mb-6 max-w-4xl text-sm leading-7 text-neutral-400 sm:mb-8 sm:text-base sm:leading-8">
                Kubernetes repose sur plusieurs ressources qui collaborent
                afin d'assurer le déploiement, l'exposition, la configuration
                et la persistance de l'application. Cette section présente
                uniquement les composants réellement utilisés dans ce laboratoire.
            </p>

            <div className="overflow-hidden rounded-3xl border border-neutral-800">
                <div className="hidden md:block">
                    <table className="w-full">
                        <thead className="bg-neutral-900">
                            <tr>
                                <th className="border-b border-neutral-800 p-4 text-left sm:p-5">
                                    Ressource
                                </th>
                                <th className="border-b border-neutral-800 p-4 text-left sm:p-5">
                                    Rôle
                                </th>
                                <th className="border-b border-neutral-800 p-4 text-left sm:p-5">
                                    Pourquoi ce choix ?
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {components.map((component) => (
                                <tr key={component.name} className="transition hover:bg-neutral-900">
                                    <td className="border-b border-neutral-800 p-4 font-semibold text-cyan-400 sm:p-5">
                                        {component.name}
                                    </td>
                                    <td className="border-b border-neutral-800 p-4 text-neutral-300 sm:p-5">
                                        {component.role}
                                    </td>
                                    <td className="border-b border-neutral-800 p-4 text-sm leading-7 text-neutral-400 sm:p-5 sm:text-base">
                                        {component.justification}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="space-y-3 p-3 md:hidden">
                    {components.map((component) => (
                        <div key={component.name} className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
                            <div className="font-semibold text-cyan-400">{component.name}</div>
                            <div className="mt-2 text-sm text-neutral-300">{component.role}</div>
                            <div className="mt-2 text-sm leading-6 text-neutral-400">
                                {component.justification}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}