"use client";

import { useContext, memo } from "react";
import { Patient } from "@/src/types/types";
import { UserCard } from "./UserCard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PatientsContext } from "../context/Context";
import { convertToSlug } from "../utils/utils";

const PatientsComponent = () => {
  // 🔄 ОНОВЛЕНО: отримуємо контекст з новою структурою { patients, isLoading, error }
  const context = useContext(PatientsContext);
  const patients: Patient[] = context?.patients || [];
  const pathName = usePathname();

  return (
    <aside className="min-w-[368px] bg-white rounded-2xl flex flex-col pb-5">
      <div className="flex items-center justify-between p-5 pb-10">
        <h2 className="card-title-24pt">Patients</h2>
        <button
          className="cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Search patients"
        >
          <img src="/icons/search.svg" alt="" className="w-[18px] h-[18px]" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto mr-1 ">
        <ul>
          {patients.map(({ name, age, gender, profile_picture }: Patient) => {
            const slug = convertToSlug(name);
            return (
              <li
                key={slug}
                className={`flex items-center justify-between p-4 pr-5 cursor-pointer transition-colors duration-200 ${
                  pathName.includes(slug) ? "bg-[#D8FCF7]" : ""
                }`}
              >
                <Link
                  href={`/patients/${slug}`}
                  className="flex-1 flex items-center justify-between"
                  aria-current={pathName.includes(slug) ? "page" : undefined}
                >
                  <UserCard
                    name={name}
                    description={`${gender}, ${age}`}
                    img={profile_picture}
                  />
                  <img
                    src="/icons/more_horiz.svg"
                    alt=""
                    className="h-[18px] w-[18px]"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

// ⚡ ОПТИМІЗОВАНО: memo запобігає перерендеру компоненту
export const Patients = memo(PatientsComponent);
Patients.displayName = "Patients";
