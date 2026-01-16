import { Patients } from "@/src/components/Patients";

export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8 w-full h-full">
      <Patients />
      <section className="flex flex-1 gap-8">{children}</section>
    </div>
  );
}
