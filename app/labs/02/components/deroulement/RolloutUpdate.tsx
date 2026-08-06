import {
    RefreshCw,
    Undo2,
    CheckCircle2,
} from "lucide-react";

export default function RolloutUpdate() {
    return (
        <section>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
                <h3 className="text-xl font-bold sm:text-2xl">
                    4.7 Mise à jour de l&apos;application
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
                    Une plateforme Kubernetes ne sert pas uniquement à exécuter des
                    conteneurs. Elle permet également de déployer de nouvelles
                    versions d&apos;une application sans interruption de service.
                </p>

                <p className="mt-3 text-sm leading-7 text-neutral-300 sm:mt-4 sm:text-base sm:leading-8">
                    Après une modification du code source, le pipeline CI/CD
                    construit une nouvelle image Docker puis la publie dans Docker
                    Hub. Une nouvelle version devient alors disponible pour le
                    cluster.
                </p>

                {/* VERSION */}
                <div className="mt-8 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-10 sm:p-8">
                    <h4 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">
                        Nouvelle version disponible
                    </h4>

                    <pre className="overflow-x-auto text-center text-cyan-300">
                        {`fayemameibra/devops-portfolio:v0.0.1

                ↓

fayemameibra/devops-portfolio:v0.0.2`}
                    </pre>
                </div>

                {/* UPDATE */}
                <div className="mt-12">
                    <div className="flex items-center gap-3">
                        <RefreshCw
                            className="text-cyan-400"
                            size={22}
                        />

                        <h4 className="text-xl font-semibold">
                            Déclenchement de la mise à jour
                        </h4>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Kubernetes permet d&apos;indiquer au Deployment qu&apos;une
                        nouvelle image doit être utilisée.
                    </p>

                    <div className="mt-6 rounded-xl border border-neutral-700 bg-neutral-950 p-5">
                        <pre className="text-green-400 overflow-x-auto">
                            {`kubectl set image deployment/my-nextjs-app \
my-nextjs-app=fayemameibra/devops-portfolio:v0.0.2 \
-n nextjs-app`}
                        </pre>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Le Deployment détecte immédiatement le changement et démarre
                        un processus de mise à jour progressive.
                    </p>
                </div>

                {/* ROLLING UPDATE */}
                <div className="mt-12">
                    <h4 className="text-xl font-semibold">
                        Rolling Update
                    </h4>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Kubernetes ne supprime jamais tous les Pods simultanément.
                        Les anciens Pods sont remplacés progressivement par de
                        nouveaux Pods exécutant la nouvelle version.
                    </p>

                    <div className="mt-5 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-6 sm:p-8">
                        <pre className="overflow-x-auto text-center text-sm text-cyan-300 sm:text-base">
                            {`v0.0.1   v0.0.1   v0.0.1

              ↓

v0.0.2   v0.0.1   v0.0.1

              ↓

v0.0.2   v0.0.2   v0.0.1

              ↓

v0.0.2   v0.0.2   v0.0.2`}
                        </pre>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Durant toute l&apos;opération, le Service continue de répartir
                        les requêtes entre les Pods disponibles. Les utilisateurs
                        peuvent donc accéder au portfolio sans interruption.
                    </p>
                </div>

                {/* STATUS */}
                <div className="mt-12">
                    <h4 className="text-xl font-semibold">
                        Suivi du déploiement
                    </h4>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Kubernetes permet de suivre l&apos;avancement de la mise à
                        jour en temps réel.
                    </p>

                    <div className="mt-6 rounded-xl border border-neutral-700 bg-neutral-950 p-5">
                        <pre className="text-green-400 overflow-x-auto">
                            {`kubectl rollout status deployment/my-nextjs-app \
-n nextjs-app`}
                        </pre>
                    </div>

                    {/* <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                        <h5 className="font-semibold text-cyan-300">
                            Capture d&apos;écran
                        </h5>
                        <img src="/labs/02/rollout-status.png"
                            alt="Résultat de kubectl rollout status"
                            className="mt-5 rounded-xl border border-neutral-700"
                        />
                    </div> */}
                </div>

                {/* ROLLBACK */}
                <div className="mt-12">
                    <div className="flex items-center gap-3">
                        <Undo2
                            size={22}
                            className="text-amber-400"
                        />

                        <h4 className="text-xl font-semibold">
                            Rollback en cas de problème
                        </h4>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Si la nouvelle version présente un défaut critique,
                        Kubernetes permet de revenir instantanément à la version
                        précédente.
                    </p>

                    <div className="mt-6 rounded-xl border border-neutral-700 bg-neutral-950 p-5">
                        <pre className="text-green-400 overflow-x-auto">
                            {`kubectl rollout undo deployment/my-nextjs-app \
-n nextjs-app`}
                        </pre>
                    </div>
                    {/* 
                    <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6">
                        <h5 className="font-semibold text-amber-300">
                            Capture d&apos;écran
                        </h5>

                        /labs/02/rollout-undo.png
                    </div> */}
                </div>

                {/* RESULTAT */}
                {/* <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-400" />

                        <h4 className="font-semibold text-green-300">
                            Résultat obtenu
                        </h4>
                    </div>

                    <p className="mt-4 leading-7 text-green-100">
                        Kubernetes remplace progressivement les anciens Pods par les
                        nouveaux tout en maintenant le service disponible. Cette
                        stratégie de déploiement réduit considérablement les risques
                        liés aux mises à jour applicatives.
                    </p>

                    <p className="mt-4 leading-7 text-green-100">
                        En cas d&apos;incident, un rollback permet de revenir
                        immédiatement à la version précédente. Cette capacité est
                        essentielle dans un environnement de production où la
                        disponibilité du service doit être préservée.
                    </p>
                </div> */}
            </div>
        </section>
    );
}