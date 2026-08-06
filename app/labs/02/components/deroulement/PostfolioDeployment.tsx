import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Boxes,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

export default function PortfolioDeployment() {
    return (
        <section>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-10">
                <h3 className="text-2xl font-bold">
                    4.4 Déploiement du Portfolio
                </h3>

                <p className="mt-6 leading-8 text-neutral-300">
                    Après avoir préparé l&apos;infrastructure Kubernetes et déployé
                    PostgreSQL, l&apos;étape suivante consiste à exécuter
                    l&apos;application portfolio sur le cluster.
                </p>

                <p className="mt-4 leading-8 text-neutral-300">
                    Pour cela, nous utilisons l&apos;
                    <span className="font-semibold text-cyan-400">
                        image Docker
                    </span>{" "}
                    construite et publiée automatiquement lors du{" "}
                    <span className="font-semibold text-cyan-400">
                        Lab 01
                    </span>
                    . Kubernetes va ensuite se charger de son exécution et de sa
                    disponibilité.
                </p>

                {/* IMAGE DOCKER */}
                <div className="mt-10">
                    <h4 className="text-xl font-semibold">
                        Image utilisée
                    </h4>

                    <div className="mt-5 rounded-2xl border border-neutral-700 bg-neutral-950 p-6">
                        <code className="text-cyan-300">
                            fayemameibra/devops-portfolio:v0.0.2
                        </code>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Cette image est produite automatiquement par le pipeline
                        GitHub Actions présenté dans le Lab 01. Le cluster Kubernetes
                        récupère ensuite cette image depuis le registre Docker Hub
                        afin de créer les conteneurs de l&apos;application.
                    </p>
                </div>

                {/* DEPLOYMENT */}
                <div className="mt-12">
                    <div className="flex items-center gap-3">
                        <Boxes
                            size={22}
                            className="text-cyan-400"
                        />

                        <h4 className="text-xl font-semibold">
                            Gestion des Pods avec un Deployment
                        </h4>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        L&apos;application est déployée grâce à une ressource
                        Kubernetes de type{" "}
                        <span className="font-semibold text-cyan-400">
                            Deployment
                        </span>
                        .
                    </p>

                    <p className="mt-4 leading-7 text-neutral-300">
                        Le Deployment est responsable :
                    </p>

                    <ul className="mt-5 space-y-3 text-neutral-300">
                        <li>• de la création des Pods ;</li>
                        <li>• de leur remplacement en cas de panne ;</li>
                        <li>• de leur mise à jour lors d&apos;une nouvelle version.</li>
                    </ul>

                    <Accordion
                        className="mt-6"
                    >
                        <AccordionItem
                            value="deployment"
                            className="rounded-xl border border-neutral-700 px-5"
                        >
                            <AccordionTrigger>
                                Deployment du portfolio
                            </AccordionTrigger>

                            <AccordionContent>
                                <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-5 text-sm text-cyan-300">
                                    {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nextjs-app
  namespace: nextjs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-nextjs-app
  template:
    metadata:
      labels:
        app: my-nextjs-app
    spec:
      containers:
        - name: my-nextjs-app
          image: fayemameibra/devops-portfolio:v0.0.2
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3000

          env:
            - name: DB_HOST
              valueFrom:
                configMapKeyRef:
                  name: nextjs-config
                  key: DB_HOST
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: nextjs-secret
                  key: DB_PASSWORD

`}
                                </pre>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* REPLICAS */}
                <div className="mt-12">
                    <div className="flex items-center gap-3">
                        <ShieldCheck
                            size={22}
                            className="text-green-400"
                        />

                        <h4 className="text-xl font-semibold">
                            Haute disponibilité avec plusieurs réplicas
                        </h4>
                    </div>

                    <div className="mt-5 rounded-2xl border border-neutral-700 bg-neutral-950 p-6">
                        <code className="text-green-400">
                            replicas: 3
                        </code>
                    </div>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Le portfolio est exécuté simultanément dans{" "}
                        <span className="font-semibold text-green-400">
                            trois Pods
                        </span>
                        .
                    </p>

                    <p className="mt-4 leading-7 text-neutral-300">
                        Cette configuration améliore la disponibilité de
                        l&apos;application. Si l&apos;un des Pods disparaît à cause
                        d&apos;une panne ou d&apos;un redémarrage de nœud,
                        Kubernetes détecte automatiquement la situation et crée un
                        nouveau Pod pour maintenir le nombre de réplicas souhaité.
                    </p>
                    <p>
                        <img src="/labs/02/deployment-replicas.png" alt="Schéma illustrant le fonctionnement des réplicas dans un Deployment Kubernetes" className="mt-5 rounded-lg border border-neutral-700" />
                    </p>
                    <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
                        <div className="flex items-center gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-green-400"
                            />

                            <span className="font-semibold text-green-300">
                                Résultat obtenu
                            </span>
                        </div>

                        <p className="mt-4 leading-7 text-green-100">
                            L&apos;application est désormais exécutée sur le cluster
                            Kubernetes à partir de l&apos;image produite dans le Lab
                            01. Kubernetes garantit automatiquement le maintien des
                            Pods et prépare l&apos;application à être exposée au reste
                            du réseau dans les prochaines étapes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}