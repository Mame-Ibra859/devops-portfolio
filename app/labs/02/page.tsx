import { Header } from "@/components/Header";
import Architecture from "./components/Architecture";
import ComponentsTable from "./components/ComponentsTable";
import Conclusion from "./components/deroulement/Conclusion";
import ConfigurationManagement from "./components/deroulement/ConfigurationManagement";
import Difficulties from "./components/deroulement/Difficulties";
import Installation from "./components/deroulement/Installation";
import Namespace from "./components/deroulement/Namespace";
import Networking from "./components/deroulement/Networking";
import PortfolioDeployment from "./components/deroulement/PostfolioDeployment";
import PostgresDeployment from "./components/deroulement/PostgresDeployment";
import RolloutUpdate from "./components/deroulement/RolloutUpdate";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export default function Lab02Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 sm:py-12 lg:gap-20 lg:py-16">
        <Hero />
        <Problem />
        <Architecture />
        <ComponentsTable />
        <Installation />
        <Namespace />
        <PostgresDeployment />
        <PortfolioDeployment />
        <ConfigurationManagement />
        <Networking />
        {/* <IngressPublication /> */}
        <RolloutUpdate />
        <Difficulties />
        <Conclusion />

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-between sm:gap-4">
          <Link
            href="/labs/01"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20"
          >
            <ArrowLeft size={16} />
            <span>Précédent : GitLab CI/CD</span>
          </Link>

          <Link
            href="/labs/02"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20"
          >
            <span>Suivant : GitOps</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
