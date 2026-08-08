import { Globe, Network, CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Networking() {
  return (
    <section>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
        <h3 className="text-xl font-bold sm:text-2xl">4.6 Mise en réseau</h3>

        <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
          Une fois PostgreSQL et l&apos;application déployés sur le cluster, il
          est nécessaire d&apos;organiser les communications réseau entre les
          différents composants puis d&apos;exposer le portfolio vers
          l&apos;extérieur.
        </p>

        <p className="mt-3 text-sm leading-7 text-neutral-300 sm:mt-4 sm:text-base sm:leading-8">
          Kubernetes s&apos;appuie principalement sur deux ressources : les{" "}
          <span className="font-semibold text-cyan-400">Services</span> pour
          fournir des points d&apos;accès stables aux applications et les{" "}
          <span className="font-semibold text-violet-400">Ingress</span> pour
          publier les applications vers les utilisateurs.
        </p>

        {/* SERVICE */}

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Network size={22} className="text-cyan-400" />

            <h4 className="text-xl font-semibold">
              Communication interne avec les Services
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Les Pods Kubernetes sont des ressources éphémères. Ils peuvent être
            redémarrés, remplacés ou déplacés sur un autre nœud à tout moment.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Pour cette raison, les applications ne doivent jamais communiquer
            directement avec les Pods. Kubernetes fournit un{" "}
            <span className="font-semibold text-cyan-400">Service</span> afin de
            leur attribuer une adresse réseau stable.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="service"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>Service du portfolio</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`apiVersion: v1
kind: Service
metadata:
  name:  my-nextjs-app
  namespace: nextjs-app
spec:
  selector:
    app: my-nextjs-app
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-8 sm:p-8">
            <pre className="overflow-x-auto text-center text-sm text-cyan-300 sm:text-base">
              {`Pod A

Pod B

Pod C

  ↓

 Service

  ↓

Une seule adresse IP`}
            </pre>
          </div>

          <p className="mt-6 leading-7 text-neutral-300">
            Le Service agit également comme un mécanisme de{" "}
            <span className="font-semibold text-cyan-400">load balancing</span>.
            Les requêtes sont automatiquement réparties entre les différents
            Pods disponibles.
          </p>

          <div className="mt-4 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-6 sm:p-6">
            <pre className="overflow-x-auto text-center text-sm text-green-300 sm:text-base">
              {`Utilisateur
      │
      ▼

 Service
      │

 ┌────┼────┐

 ▼    ▼    ▼

Pod1 Pod2 Pod3`}
            </pre>
          </div>
        </div>

        {/* INGRESS */}

        <div className="mt-10 sm:mt-14">
          <div className="flex items-center gap-3">
            <Globe size={22} className="text-violet-400" />

            <h4 className="text-xl font-semibold">
              Publication de l&apos;application
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Le Service rend l&apos;application accessible à l&apos;intérieur du
            cluster. Pour permettre à un utilisateur externe d&apos;accéder au
            portfolio, Kubernetes utilise un{" "}
            <span className="font-semibold text-violet-400">Ingress</span>.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Dans cette plateforme K3s, le rôle d&apos;Ingress Controller est
            assuré par{" "}
            <span className="font-semibold text-violet-400">Traefik</span>,
            fourni nativement avec la distribution. Bien que d&apos;autres
            solutions telles que{" "}
            <span className="font-semibold text-violet-400">
              NGINX Ingress Controller
            </span>
            ,
            <span className="font-semibold text-violet-400">
              {" "}
              HAProxy Ingress
            </span>{" "}
            ou
            <span className="font-semibold text-violet-400">
              {" "}
              Kong Gateway
            </span>{" "}
            soient couramment utilisées en production, Traefik offre une
            intégration particulièrement simple avec K3s tout en répondant aux
            besoins de ce laboratoire.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Traefik reçoit les requêtes HTTP provenant d&apos;Internet, analyse
            les règles définies dans les ressources Ingress puis les redirige
            vers le Service Kubernetes approprié.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="ingress"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>
                Configuration de l&apos;Ingress
              </AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`kind: Ingress
metadata:
  name: ingress-my-app
  namespace: nextjs-app
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

          <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-8 sm:p-8">
            <h5 className="mb-4 text-base font-semibold sm:mb-6 sm:text-lg">
              Chemin complet d&apos;une requête
            </h5>

            <pre className="overflow-x-auto text-center text-sm text-violet-300 sm:text-base">
              {`Internet

     ↓

164.xxx.xxx.xxx

     ↓

Traefik
(Ingress Controller)

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

          <p className="mt-6 leading-7 text-neutral-300">
            L&apos;Ingress constitue le point d&apos;entrée HTTP de la
            plateforme. Il permet de centraliser le routage du trafic et de
            publier plusieurs applications à partir d&apos;une même adresse
            publique.
          </p>
        </div>

        {/* Capture Commande kubectl */}
        <div>
          <img
            src="/labs/02/service-ingress-publication.png"
            alt="Capture d'écran de la commande kubectl get ingress"
            className="mt-5 rounded-lg border border-neutral-700"
          />
        </div>
        {/* Aperçu du site web */}
        <div className="mt-12">
          <img
            src="/labs/02/ingress-website-preview.png"
            alt="Aperçu du site web publié via l'Ingress"
            className="mt-5 rounded-lg border border-neutral-700"
          />
        </div>

        {/* RESULTAT */}

        <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />

            <h4 className="font-semibold text-green-300">Résultat obtenu</h4>
          </div>

          <p className="mt-4 leading-7 text-green-100">
            Le portfolio est désormais accessible depuis l&apos;extérieur du
            cluster. Les requêtes arrivent sur l&apos;adresse publique du VPS,
            sont traitées par Traefik puis routées vers le Service Kubernetes
            avant d&apos;être distribuées vers les Pods de l&apos;application.
          </p>

          <p className="mt-4 leading-7 text-green-100">
            Une évolution prévue consiste à associer un nom de domaine ainsi
            qu&apos;un certificat TLS afin d&apos;activer le HTTPS et de
            disposer d&apos;une entrée sécurisée vers la plateforme.
          </p>
        </div>
      </div>
    </section>
  );
}
