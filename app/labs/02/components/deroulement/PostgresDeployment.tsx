import { Database, HardDrive, Network, CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PostgresDeployment() {
  return (
    <section>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6 lg:p-10">
        <h3 className="text-xl font-bold sm:text-2xl">
          4.3 Déploiement de PostgreSQL
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
          Avant de déployer l&apos;application Next.js, il est nécessaire de
          mettre en place les services dont elle dépend. Dans ce laboratoire, le
          premier service déployé est{" "}
          <span className="font-semibold text-cyan-400">PostgreSQL</span>, qui
          permettra de stocker les statistiques d&apos;accès au portfolio.
        </p>

        <p className="mt-4 leading-8 text-neutral-300">
          Cette approche reflète le fonctionnement d&apos;une infrastructure
          réelle : les applications sont généralement déployées après les
          services sur lesquels elles reposent.
        </p>

        {/* StatefulSet */}
        <div className="mt-8 sm:mt-10">
          <div className="flex items-center gap-3">
            <Database className="text-cyan-400" size={22} />

            <h4 className="text-xl font-semibold">
              PostgreSQL avec StatefulSet
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            PostgreSQL est déployé sous la forme d&apos;un{" "}
            <span className="font-semibold text-cyan-400">StatefulSet</span>.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Contrairement à une application stateless, une base de données
            possède un état persistant. Elle doit conserver :
          </p>

          <ul className="mt-4 space-y-2 text-sm text-neutral-300 sm:mt-5 sm:text-base">
            <li>• son identité ;</li>
            <li>• ses données ;</li>
            <li>• son stockage.</li>
          </ul>

          <p className="mt-5 leading-7 text-neutral-300">
            Un StatefulSet garantit que ces éléments sont conservés, même après
            un redémarrage ou une recréation du Pod.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="statefulset"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>StatefulSet PostgreSQL</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: postgres
spec:
  serviceName: "postgres"
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:16
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_USER
              valueFrom:
                configMapKeyRef:
                  name: postgres-config
                  key: POSTGRES_USER
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgres-secret
                  key: POSTGRES_PASSWORD
            - name: POSTGRES_DB
              valueFrom:
                configMapKeyRef:
                  name: postgres-config
                  key: POSTGRES_DB
          volumeMounts:
            - name: postgres-storage
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: postgres-storage
          persistentVolumeClaim:
            claimName: postgres-pvc`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* PVC */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <HardDrive className="text-green-400" size={22} />

            <h4 className="text-xl font-semibold">
              Stockage persistant avec PVC
            </h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Les données de PostgreSQL sont stockées dans un{" "}
            <span className="font-semibold text-green-400">
              Persistent Volume Claim (PVC)
            </span>
            .
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Le stockage est indépendant du Pod. Ainsi, un redémarrage ou un
            remplacement du conteneur n&apos;entraîne aucune perte des données.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="pvc"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>Persistent Volume Claim</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
  namespace: postgres
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Service */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Network className="text-violet-400" size={22} />

            <h4 className="text-xl font-semibold">Exposition via Service</h4>
          </div>

          <p className="mt-5 leading-7 text-neutral-300">
            Une fois PostgreSQL déployé, il doit être accessible par
            l&apos;application Next.js.
          </p>

          <p className="mt-4 leading-7 text-neutral-300">
            Kubernetes utilise un{" "}
            <span className="font-semibold text-violet-400">Service </span>
            pour fournir une adresse réseau stable aux Pods de la base de
            données.
          </p>

          <Accordion className="mt-6">
            <AccordionItem
              value="service"
              className="rounded-xl border border-neutral-700 px-5"
            >
              <AccordionTrigger>Service PostgreSQL</AccordionTrigger>

              <AccordionContent>
                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                  {`
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: postgres
  labels:
    app: postgres
spec:
  type: NodePort
  ports:
    - port: 5432
      targetPort: 5432
      nodePort: 30032
  selector:
    app: postgres`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Résultat */}
        <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />

            <h4 className="font-semibold text-green-300">Résultat obtenu</h4>
          </div>

          <p className="mt-4 leading-7 text-green-100">
            PostgreSQL est maintenant déployé dans son propre namespace avec un
            stockage persistant et une adresse réseau stable. La plateforme
            dispose désormais d&apos;une base de données prête à être consommée
            par l&apos;application Next.js qui sera déployée dans la prochaine
            étape.
          </p>
        </div>
      </div>
    </section>
  );
}
