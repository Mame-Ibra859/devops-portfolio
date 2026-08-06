import {
    SiKubernetes,
    SiDocker,
    SiPostgresql,
} from "react-icons/si";

import {
    Server,
    Network,
    ShieldCheck,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="space-y-6 sm:space-y-8">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-400 sm:px-4 sm:text-sm">
                LAB 02
            </span>

            <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Kubernetes Application Platform
            </h1>

            <p className="max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                Ce laboratoire prend l&apos;<span className="font-semibold text-cyan-400">
                    image Docker
                </span>{" "}
                produite dans le Lab 01 et la déploie sur un{" "}
                <span className="font-semibold text-cyan-400">
                    cluster Kubernetes
                </span>
                . Kubernetes est une plateforme d&apos;
                <span className="font-semibold text-cyan-400">
                    orchestration de conteneurs
                </span>{" "}
                permettant d&apos;automatiser le déploiement, la mise à l&apos;échelle et la
                haute disponibilité des applications.

                Pour cette implémentation, nous avons utilisé{" "}
                <span className="font-semibold text-violet-400">
                    K3s
                </span>
                , une version légère de Kubernetes particulièrement adaptée aux
                environnements de laboratoire et aux infrastructures hébergées sur VPS.

                Le cluster est déployé sur plusieurs{" "}
                <span className="font-semibold text-amber-400">
                    VPS
                </span>{" "}
                et héberge l&apos;application via un{" "}
                <span className="font-semibold text-green-400">
                    Ingress
                </span>
                . La configuration est externalisée dans des{" "}
                <span className="font-semibold text-blue-400">
                    ConfigMaps
                </span>
                , tandis que les données sensibles sont protégées grâce aux{" "}
                <span className="font-semibold text-red-400">
                    Secrets
                </span>
                . Une base de données est également déployée sur le cluster afin de
                stocker les statistiques d&apos;accès au portfolio. L&apos;objectif est de
                reproduire une architecture proche d&apos;un environnement de production
                où l&apos;application, sa configuration et ses données sont administrées de
                manière centralisée.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <SiDocker className="text-cyan-400" size={20} />
                        Docker Image
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <SiKubernetes className="text-cyan-400" size={20} />
                        K3s Cluster
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <Server className="text-cyan-400" size={20} />
                        Deployment & StatefulSet
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <Network className="text-cyan-400" size={20} />
                        Service & Ingress
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <SiPostgresql className="text-cyan-400" size={20} />
                        PostgreSQL
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-cyan-400" size={20} />
                        ConfigMap & Secret
                    </div>
                </div>
            </div>
        </section>

    );

}