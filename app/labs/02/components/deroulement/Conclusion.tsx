import { ArrowRightCircle } from "lucide-react";

export default function Conclusion() {
    return (
        <section>
            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4 sm:p-6 lg:p-10">
                <h3 className="text-xl font-bold sm:text-2xl">
                    Conclusion
                </h3>

                <p className="mt-4 text-sm leading-7 text-cyan-50 sm:mt-6 sm:text-base sm:leading-8">
                    Ce laboratoire a permis de transformer l'image Docker produite
                    dans le Lab 01 en une application réellement exploitée sur une
                    plateforme Kubernetes. Le cluster K3s héberge désormais le
                    portfolio, ses services réseau, sa configuration applicative et
                    sa base de données PostgreSQL dans une architecture proche
                    d'un environnement de production.
                </p>

                <p className="mt-3 text-sm leading-7 text-cyan-50 sm:mt-5 sm:text-base sm:leading-8">
                    Bien que les déploiements soient actuellement exécutés via des
                    commandes Kubernetes classiques, cette approche présente encore
                    une dépendance aux actions manuelles. L'étape suivante consiste
                    à automatiser entièrement la gestion des déploiements grâce aux
                    principes GitOps.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-black/20 p-4 sm:mt-8 sm:p-5">
                    <ArrowRightCircle
                        size={24}
                        className="text-cyan-300"
                    />

                    <div>
                        <div className="font-semibold text-cyan-200">
                            Prochaine étape : GitOps Platform
                        </div>

                        <p className="mt-1 text-sm leading-6 text-cyan-100">
                            Déploiement automatisé avec FluxCD, synchronisation depuis
                            Git et gestion déclarative complète de la plateforme.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}