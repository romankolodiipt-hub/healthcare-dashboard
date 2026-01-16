"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  name: string;
  icon: string;
  route: string;
  id: string;
};

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex gap-[16px]" role="tablist">
        {tabs.map(({ name, icon, route, id }) => {
          const activeTab =
            pathName === route || pathName.startsWith(route + "/");
          return (
            <li key={id} role="tab">
              <Link
                aria-current={activeTab ? "page" : undefined}
                href={route}
                className={`flex gap-[8px] px-[16px] py-[12px] ${
                  activeTab
                    ? "bg-[#01F0D0] rounded-[41px] opacity-100 bg-no-repeat"
                    : "bg-[#ffffff]"
                }`}
              >
                <div className="flex items-center">
                  <img
                    src={icon}
                    alt={name || "No Image"}
                    className="w-6 h-4"
                  />
                </div>
                <span className="body-emphasized-14pt">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
