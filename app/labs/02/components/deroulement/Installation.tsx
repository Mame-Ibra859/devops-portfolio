import { Terminal, Server } from "lucide-react";

export default function Installation() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          4. Le déroulement du projet
        </h2>
      </div>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
        <h3 className="text-xl font-bold sm:text-2xl">
          4.1 Installation du cluster K3s
        </h3>
        <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
          Avant de pouvoir déployer l'application, il est nécessaire de disposer
          d'une plateforme Kubernetes. Pour ce laboratoire, le choix s'est porté
          sur
          <span className="font-semibold text-white"> K3s</span>, une
          distribution légère de Kubernetes parfaitement adaptée à un
          déploiement sur VPS tout en restant entièrement compatible avec
          l'écosystème Kubernetes.
        </p>
        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">Pourquoi K3s ?</h4>

            <ul className="mt-4 space-y-2 text-sm sm:text-base text-neutral-300">
              <li>• Distribution officielle de Kubernetes.</li>
              <li>• Consommation mémoire réduite.</li>
              <li>• Installation extrêmement rapide.</li>
              <li>• Compatible avec kubectl.</li>
              <li>• Intègre Traefik par défaut.</li>
              <li>• Idéal pour un laboratoire DevOps sur VPS.</li>
            </ul>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950">
              <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3 sm:px-5 sm:py-4">
                <Terminal
                  size={16}
                  className="shrink-0 text-cyan-400 sm:size-[18px]"
                />

                <span className="text-sm sm:text-base">Installation</span>
              </div>

              <pre className="overflow-x-auto p-4 sm:p-5 text-xs sm:text-sm text-green-400">
                <code className="whitespace-pre-wrap break-all">
                  {`curl -sfL https://get.k3s.io | sh -

kubectl get nodes`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 sm:mt-10 sm:p-6">
          <h4 className="font-semibold text-cyan-300">Résultat obtenu</h4>

          <pre className="mt-4 overflow-x-auto text-sm text-green-400 sm:mt-5">
            {`NAME             STATUS   ROLES           VERSION

vps-732fcaac     Ready    control-plane   v1.33.x+k3s`}
          </pre>

          <p className="mt-4 text-sm leading-7 text-cyan-100 sm:mt-5 sm:text-base">
            Le cluster est maintenant opérationnel. Il servira de plateforme
            d'exécution pour l'ensemble des ressources Kubernetes déployées dans
            ce laboratoire.
          </p>
        </div>
      </div>
    </section>
  );
}
