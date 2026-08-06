import {
    Globe,
    CheckCircle2,
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function IngressPublication() {
    return (
        <section>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-10">
                <h3 className="text-2xl font-bold">
                    4.6 Publication via Ingress
                </h3>

                <p className="mt-6 leading-8 text-neutral-300">
                    À ce stade, l&apos;application fonctionne dans plusieurs Pods et
                    dispose déjà d&apos;un Service. Il reste maintenant à la rendre
                    accessible depuis l&apos;extérieur du cluster Kubernetes.
                </p>

                <p className="mt-4 leading-8 text-neutral-300">
                    Pour cela, nous utilisons un{" "}
                    <span className="font-semibold text-cyan-400">
                        Ingress
                    </span>{" "}
                    associé à{" "}
                    <span className="font-semibold text-cyan-400">
                        Traefik
                    </span>
                    , installé automatiquement avec K3s.
                </p>

                {/* SCHÉMA */}
                <div className="mt-10 rounded-2xl border border-neutral-700 bg-neutral-950 p-8">
                    <h4 className="mb-6 text-lg font-semibold">
                        Parcours d&apos;une requête HTTP
                    </h4>

                    <pre className="overflow-x-auto text-center text-cyan-300">
                        {`Internet

    ↓

164.xxx.xxx.xxx

    ↓

Traefik

    ↓

Ingress

    ↓

Service

    ↓

Pod

Pod

Pod`}
                    </pre>
                </div>

                {/* EXPLICATION */}
                <div className="mt-10">
                    <h4 className="text-xl font-semibold">
                        Rôle de l&apos;Ingress
                    </h4>

                    <p className="mt-5 leading-7 text-neutral-300">
                        L&apos;Ingress constitue le{" "}
                        <span className="font-semibold text-cyan-400">
                            point d&apos;entrée HTTP
                        </span>{" "}
                        de la plateforme.
                    </p>

                    <p className="mt-4 leading-7 text-neutral-300">
                        Lorsqu&apos;un utilisateur accède au portfolio, la requête
                        arrive d&apos;abord sur l&apos;adresse IP publique du serveur.
                        Traefik intercepte ensuite cette requête et consulte les
                        règles définies dans l&apos;Ingress afin de déterminer vers
                        quel Service Kubernetes rediriger le trafic.
                    </p>

                    <p className="mt-4 leading-7 text-neutral-300">
                        Le Service se charge ensuite de distribuer la requête vers
                        l&apos;un des Pods du portfolio.
                    </p>
                </div>

                {/* YAML */}
                <Accordion
                    className="mt-10"
                >
                    <AccordionItem
                        value="ingress"
                        className="rounded-xl border border-neutral-700 px-5"
                    >
                        <AccordionTrigger>
                            Configuration de l&apos;Ingress
                        </AccordionTrigger>

                        <AccordionContent>
                            <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                                {`apiVersion: networking.k8s.io/v1
kind: Ingress

metadata:
  name: ingress-my-app

spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-nextjs-app
            port:
              number: 80`}
                            </pre>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* RÉSULTAT */}
                <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-400" />

                        <h4 className="font-semibold text-green-300">
                            Résultat obtenu
                        </h4>
                    </div>

                    <p className="mt-4 leading-7 text-green-100">
                        Le portfolio est désormais accessible depuis l&apos;extérieur
                        du cluster via l&apos;adresse IP publique du VPS. Les requêtes
                        sont reçues par Traefik puis routées automatiquement vers
                        l&apos;application déployée sur Kubernetes.
                    </p>

                    <p className="mt-4 leading-7 text-green-100">
                        Une évolution prévue consiste à associer un{" "}
                        <span className="font-semibold">
                            nom de domaine
                        </span>{" "}
                        ainsi qu&apos;un{" "}
                        <span className="font-semibold">
                            certificat TLS
                        </span>{" "}
                        afin d&apos;activer le HTTPS et de disposer d&apos;une entrée
                        sécurisée vers la plateforme.
                    </p>
                </div>
            </div>
        </section>
    );
}