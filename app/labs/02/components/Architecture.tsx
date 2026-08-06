import {
    Globe,
    ArrowRight,
    Server,
    Database,
    HardDrive,
    FileText,
    Shield,
} from "lucide-react";

const pods = ["Pod 1", "Pod 2", "Pod 3"];

export default function Architecture() {
    return (
        <section className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                    2. Architecture finale
                </h2>
            </div>

            <p className="max-w-4xl text-sm leading-7 text-neutral-400 sm:text-base">
                L'application est déployée sur une plateforme Kubernetes K3s
                installée sur un VPS. Les utilisateurs accèdent au portfolio via
                un Ingress. Celui-ci redirige les requêtes vers un Service
                Kubernetes qui répartit automatiquement le trafic entre plusieurs
                Pods. Une base PostgreSQL est déployée indépendamment dans un
                StatefulSet afin de conserver les données de manière persistante.
            </p>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 md:p-8">
                <h3 className="mb-5 text-center text-lg font-semibold sm:mb-6 sm:text-xl lg:text-2xl">
                    Cluster Kubernetes (K3s)
                </h3>

                <div className="flex flex-col gap-4 xl:flex-row xl:items-stretch">
                    <div className="flex flex-col gap-3 xl:w-[220px]">
                        <div className="rounded-2xl border border-cyan-500/60 bg-cyan-500/10 px-3 py-3 sm:px-4">
                            <div className="flex items-center gap-2">
                                <Globe className="text-cyan-400" size={18} />
                                <span className="text-sm font-semibold sm:text-base">
                                    Utilisateur / Internet
                                </span>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-green-500/60 bg-green-500/10 px-3 py-3 sm:px-4">
                            <h4 className="text-sm font-semibold sm:text-base">Ingress (Traefik)</h4>
                            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                                Point d'entrée HTTP
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-500/60 bg-blue-500/10 px-3 py-3 sm:px-4">
                            <h4 className="text-sm font-semibold sm:text-base">Service (ClusterIP)</h4>
                            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                                Répartition du trafic
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-2 xl:px-0">
                        <ArrowRight className="hidden text-neutral-500 xl:block" size={24} />
                    </div>

                    <div className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-3 sm:p-4">
                        <div className="mb-3 flex items-center gap-2 text-sm text-neutral-400">
                            <Server className="text-cyan-400" size={18} />
                            <span>Pods Next.js</span>
                        </div>

                        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                {pods.map((pod) => (
                                    <div
                                        key={pod}
                                        className="rounded-xl border border-neutral-700 bg-neutral-900 p-4 text-center"
                                    >
                                        <Server
                                            className="mx-auto mb-2 text-cyan-400"
                                            size={24}
                                        />
                                        <h4 className="font-semibold">{pod}</h4>
                                        <p className="mt-1 text-sm text-neutral-500">
                                            Next.js
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 rounded-xl border border-neutral-700 bg-neutral-900/80 p-3">
                                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                                    <FileText className="text-cyan-400" size={16} />
                                    Configuration
                                </div>

                                <div className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 p-3">
                                    <div className="flex items-center gap-2">
                                        <FileText className="text-cyan-400" size={16} />
                                        <span className="text-sm font-medium">
                                            ConfigMap
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-neutral-400">
                                        Variables d'environnement et config
                                    </p>
                                </div>

                                <div className="rounded-lg border border-purple-500/40 bg-purple-500/10 p-3">
                                    <div className="flex items-center gap-2">
                                        <Shield className="text-purple-400" size={16} />
                                        <span className="text-sm font-medium">
                                            Secret
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-neutral-400">
                                        Credentials et tokens sensibles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-2 xl:px-0">
                        <ArrowRight className="hidden text-neutral-500 xl:block" size={24} />
                    </div>

                    <div className="rounded-2xl border border-orange-500/60 bg-orange-500/10 p-4 xl:w-[240px]">
                        <h4 className="text-center text-lg font-semibold">
                            Namespace postgres
                        </h4>

                        <div className="mt-4 space-y-3">
                            <div className="rounded-xl border border-neutral-700 bg-neutral-950/80 p-3 text-center">
                                <Database
                                    className="mx-auto mb-2 text-cyan-400"
                                    size={24}
                                />
                                <h5 className="font-medium">StatefulSet</h5>
                                <p className="mt-1 text-sm text-neutral-500">
                                    PostgreSQL 16
                                </p>
                            </div>

                            <div className="rounded-xl border border-neutral-700 bg-neutral-950/80 p-3 text-center">
                                <HardDrive
                                    className="mx-auto mb-2 text-cyan-400"
                                    size={24}
                                />
                                <h5 className="font-medium">
                                    PersistentVolumeClaim
                                </h5>
                                <p className="mt-1 text-sm text-neutral-500">
                                    2 Gi de stockage persistant
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

