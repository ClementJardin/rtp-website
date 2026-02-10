"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { track } from "@vercel/analytics";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  eventName?: string;
  eventData?: Record<string, string | number | boolean>;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  eventName,
  eventData,
}: ButtonProps) {
  const baseStyles =
    "inline-block text-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2 shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-bordeaux text-white hover:bg-bordeaux-dark shadow-lg",
    secondary: "bg-rose text-bordeaux hover:bg-rose-dark shadow-md",
    outline:
      "border-2 border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = () => {
    if (eventName) {
      track(eventName, eventData);
    }
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link 
        href={href} 
        className={styles}
        onClick={eventName ? handleClick : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={styles}>
      {children}
    </button>
  );
}
