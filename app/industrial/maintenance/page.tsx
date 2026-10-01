import { ConsultBand } from "@/components/ConsultBand";
import { MaintenanceView } from "@/components/MaintenanceView";
import { industrialMaintenance } from "@/lib/maintenance";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  industrialMaintenance.title,
  industrialMaintenance.description,
  "/industrial/maintenance",
);

export default function IndustrialMaintenancePage() {
  return (
    <>
      <MaintenanceView
        data={industrialMaintenance}
        path="/industrial/maintenance"
        parent={{ name: "Industrial", href: "/industrial" }}
      />
      <ConsultBand
        title="Have a shutdown window coming up?"
        body="Tell us the dates and the equipment that can’t fail in the middle of a run. We’ll build the visit around that."
      />
    </>
  );
}
