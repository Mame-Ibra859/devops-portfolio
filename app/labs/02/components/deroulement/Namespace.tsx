import {
    FolderTree,
    Terminal,
} from "lucide-react";

export default function Namespace() {

    return (

        <section>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">

                <h3 className="text-xl font-bold sm:text-2xl">

                    4.2 Organisation du cluster avec les Namespaces

                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">

                    Une fois le cluster disponible, la première étape
                    consiste à organiser les ressources. Kubernetes
                    fournit les
                    <span className="font-semibold text-white">
                        {" "}Namespaces
                    </span>,
                    qui permettent de créer des espaces logiques
                    indépendants à l'intérieur d'un même cluster.

                </p>

                <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">

                    <div>

                        <h4 className="text-lg font-semibold sm:text-xl">

                            Pourquoi plusieurs Namespaces ?

                        </h4>

                        <ul className="mt-5 space-y-3 text-neutral-300">

                            <li>• Isolation des applications.</li>

                            <li>• Organisation plus claire.</li>

                            <li>• Administration simplifiée.</li>

                            <li>• Gestion indépendante des ressources.</li>

                            <li>• Préparation à une plateforme multi-applications.</li>

                        </ul>

                    </div>

                    <div>

                        <div className="rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:p-6">

                            <pre className="overflow-x-auto text-sm text-cyan-300">
                                {`Cluster Kubernetes

├── nextjs-app
│      ├── Deployment
│      ├── Service
│      ├── Ingress
│      ├── ConfigMap
│      └── Secret

└── postgres
       ├── StatefulSet
       ├── Service
       ├── Secret
       ├── ConfigMap
       └── PVC`}
                            </pre>

                        </div>

                    </div>

                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950 sm:mt-10">

                    <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3 sm:px-5 sm:py-4">

                        <Terminal
                            size={18}
                            className="text-cyan-400"
                        />

                        <span>

                            Création des Namespaces

                        </span>

                    </div>

                    <pre className="overflow-x-auto p-4 text-sm text-green-400 sm:p-5">
                        {`kubectl apply -f namespace-nextjs.yaml

kubectl apply -f namespace-postgres.yaml
`}
                    </pre>

                </div>

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 sm:mt-10 sm:p-6">

                    <h4 className="font-semibold text-cyan-300">

                        Résultat obtenu

                    </h4>

                    <pre className="mt-4 overflow-x-auto text-sm text-green-400 sm:mt-5">
                        {/* {`NAME

default

kube-system

nextjs-app

postgres`} */}
                        <img src="/labs/02/namespace-result.png" alt="Résultat de la commande kubectl get namespaces" className="mt-5 rounded-lg border border-neutral-700" />
                    </pre>

                    <p className="mt-4 text-sm leading-7 text-cyan-100 sm:mt-6 sm:text-base">

                        Les ressources du portfolio et celles de PostgreSQL
                        sont maintenant totalement séparées. Cette
                        organisation simplifie les opérations
                        d'administration, les futures évolutions de la
                        plateforme ainsi que la maintenance quotidienne.

                    </p>

                </div>

            </div>

        </section>

    );

}