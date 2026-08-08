import { Settings, Lock, CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConfigurationManagement() {
  return (
    <section>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
        <h3 className="text-xl font-bold sm:text-2xl">
          4.5 Externalisation de la configuration
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
          Dans une plateforme Kubernetes, les paramètres de configuration et les
          informations sensibles ne doivent pas être intégrés directement dans
          l&apos;image Docker.
        </p>

        <p className="mt-3 text-sm leading-7 text-neutral-300 sm:mt-4 sm:text-base sm:leading-8">
          Kubernetes fournit deux mécanismes dédiés : les{" "}
          <span className="font-semibold text-cyan-400">ConfigMaps</span> pour
          la configuration applicative et les{" "}
          <span className="font-semibold text-red-400">Secrets</span> pour les
          données sensibles.
        </p>

        {/* CONFIGMAP */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Settings size={22} className="text-cyan-400" />

            <h4 className="text-xl font-semibold">
              Configuration avec ConfigMap
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Les paramètres fonctionnels de l&apos;application sont stockés dans
            une ConfigMap afin d&apos;être modifiés indépendamment de
            l&apos;image Docker.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="configmap"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>ConfigMap du portfolio</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`apiVersion: v1
kind: ConfigMap
metadata:
  name: nextjs-config
  namespace: nextjs-app
data:
  DB_HOST: "postgres"`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 sm:mt-6 sm:p-5">
            <div className="font-mono text-cyan-300">DB_HOST = postgres</div>
          </div>

          <p className="mt-6 leading-7 text-neutral-300">
            Grâce à cette approche, l&apos;application récupère automatiquement
            l&apos;adresse du service PostgreSQL sans que cette information soit
            codée en dur dans l&apos;application ou l&apos;image Docker.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Une modification de configuration peut ainsi être réalisée
            indépendamment du processus de build et de publication de
            l&apos;image.
          </p>
        </div>

        {/* SECRET */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Lock size={22} className="text-red-400" />

            <h4 className="text-xl font-semibold">
              Protection des données avec Secret
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Les informations sensibles suivent une approche différente. Les mots
            de passe, clés API ou tokens ne doivent jamais apparaître
            directement dans les manifests Kubernetes.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="secret"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>Secret PostgreSQL</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`apiVersion: v1
kind: Secret
metadata:
  name: nextjs-secret
  namespace: nextjs-app
data:
  DB_PASSWORD: <base64-encoded-password>`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 sm:mt-6 sm:p-5">
            <div className="font-mono text-red-300">DB_PASSWORD</div>
          </div>

          <p className="mt-6 leading-7 text-neutral-300">
            Le mot de passe PostgreSQL est stocké dans un{" "}
            <span className="font-semibold text-red-400">
              Secret Kubernetes
            </span>
            .
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Ainsi, aucune information sensible n&apos;apparaît directement dans
            les manifests de déploiement ni dans le code de l&apos;application.
          </p>
        </div>

        {/* INJECTION DANS LE POD */}
        <div className="mt-8 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 sm:mt-12 sm:p-6">
          <h4 className="font-semibold text-lg">Injection dans le conteneur</h4>

          <p className="mt-4 leading-7 text-neutral-300">
            Au démarrage du Pod, Kubernetes injecte automatiquement les valeurs
            provenant de la ConfigMap et du Secret sous forme de variables
            d&apos;environnement.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-lg bg-black/40 p-5 text-sm text-cyan-300">
            {`env:
  - name: DB_HOST
    valueFrom:
      configMapKeyRef:
        name: nextjs-config
        key: DB_HOST

  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: nextjs-secret
        key: DB_PASSWORD`}
          </pre>
        </div>

        {/* RESULTAT */}
        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 sm:mt-12 sm:p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />

            <h4 className="font-semibold text-green-300">Résultat obtenu</h4>
          </div>

          <p className="mt-3 text-sm leading-7 text-green-100 sm:mt-4 sm:text-base">
            La configuration de l&apos;application est désormais totalement
            séparée de l&apos;image Docker. Les paramètres fonctionnels peuvent
            évoluer via des ConfigMaps tandis que les informations sensibles
            sont protégées dans des Secrets. Cette approche facilite
            l&apos;administration de la plateforme et respecte les bonnes
            pratiques Kubernetes.
          </p>
        </div>
      </div>
    </section>
  );
}
