import Image from "next/image";
import React from "react";

interface UserCardProps {
  name: string;
  description: string;
  img: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  description,
  img,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={img} alt={name} width={44} height={44} priority />
      <div className="flex-col gap-2">
        <p className="body-emphasized-14pt">{name}</p>
        <p className="body-secondary-info-14pt">{description}</p>
      </div>
    </div>
  );
};
