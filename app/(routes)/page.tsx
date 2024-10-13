import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSumary";
import { BookOpenCheck, List, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributors } from "./components/SalesDistributors";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export const dataCardsSummary = [
  {
    icon: UsersRound,
    total: "abrir",
    average: 15,
    title: "Traductor de lenguaje de señas",
    tooltipText: "Traduce el lenguaje de señas a texto",
  },
  {
    icon: Waypoints,
    total: "Tutoriales, enlaces a informacion sobre lenguaje de señas",
    average: 80,
    title: "Contenido Educativo",
    tooltipText: "Aprende más sobre la comunidad sorda del Ecuador",
  },
  {
    icon: BookOpenCheck,
    total: "363.85$",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate",
  },
]
export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20 " >
        {dataCardsSummary.map(({icon, total, average, title, tooltipText}) => (
          <CardSummary
          key={title}
          icon={icon}
          total={total}
          average={average}
          title={title}
          tooltipText={tooltipText}
          />
        ))}
      </div>
      {/* Generar un nuevo componente */}
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12 ">
        <LastCustomers />  {/* Generar un nuevo componente solo para last customer y lo usamos <lastcutomers/> */}
        <SalesDistributors />   {/* Generar un nuevo componente solo para sales distributos y lo usamos <SalesDistributors/> */}

      </div>
      <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
        <TotalSuscribers />  {/* Generar un nuevo componente solo para total suscribers y lo usamos <TotalSuscribers/> */}
        <ListIntegrations />  {/* Generar un nuevo componente solo para list integrations y lo usamos <ListIntegrations/> */}


      </div>

      
    </div>
  );
}
