/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";

interface HomeCardProps {
  children: ReactNode;
  className?: string; // Make className optional
}

function HomeCard({ children, className }: HomeCardProps) {
  // Concatenate the className prop with existing class names
  const combinedClassName = ` w-full h-full ${className || ''}`;

  return <div className={combinedClassName}>{children}</div>;
}

export default HomeCard;
