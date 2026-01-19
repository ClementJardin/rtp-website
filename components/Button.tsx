import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block text-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-bordeaux text-white hover:bg-bordeaux-dark shadow-lg",
    secondary: "bg-rose text-bordeaux hover:bg-rose-dark shadow-md",
    outline:
      "border-2 border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
