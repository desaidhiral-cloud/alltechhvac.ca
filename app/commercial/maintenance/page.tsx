import { ConsultBand } from "@/components/ConsultBand";
import { MaintenanceView } from "@/components/MaintenanceView";
import { commercialMaintenance } from "@/lib/maintenance";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  commercialMaintenance.title,
  commercialMaintenance.description,
  "/commercial/maintenance",
);

export default function CommercialMaintenancePage() {
  return (
    <>
      <MaintenanceView
        data={commercialMaintenance}
        path="/commercial/maintenance"
        parent={{ name: "Commercial", href: "/commercial" }}
      />
      <ConsultBand
        title="Want a number for next year’s maintenance?"
        body="We’ll survey the roof and the mechanical room, then price the plan that matches the equipment, not a template."
      />
    </>
  );
}
