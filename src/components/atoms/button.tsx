import { cn } from "@/src/lib/cn";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "link" | "dark";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-pg0 text-tx hover:bg-pg0/90 transition-colors",
  secondary: "border border-pg0/30 text-pg0 hover:bg-pg0/10 transition-colors",
  link: "border-b border-tx/20 pb-1 hover:gap-4 transition-all",
  dark: "bg-tx text-pg0 hover:bg-tx/90 transition-colors",
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  disabled,
  showArrow = true,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase";

  const paddingStyles: Record<ButtonVariant, string> = {
    primary: "px-10 py-4 justify-center",
    secondary: "px-10 py-4 justify-center",
    link: "pb-1",
    dark: "px-10 py-4 justify-center",
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    paddingStyles[variant],
    className,
  );

  const content = (
    <>
      {children}
      {variant === "link" && showArrow && <ArrowRight size={14} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}
