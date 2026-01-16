import { UserCard } from "./UserCard";

export const Account = () => {
  return (
    <div className="flex items-center gap-3 h-full">
      <UserCard
        name="Dr. Jose Simmons"
        description="General Practitioner"
        img="/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
      />
      <div className="border-r-[1px] border-[#EDEDED]  h-full min-h-full"></div>
      <img src="/icons/settings.svg" alt="Settings" className="w-[19px] h-5" />
      <img src="/icons/more_vert.svg" alt="More" className="w-1 h-5" />
    </div>
  );
};
