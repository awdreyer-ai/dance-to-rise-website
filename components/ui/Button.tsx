import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ComponentPropsWithoutRef<"button">, "className"> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C4305A] text-white hover:bg-[#A52848] focus-visible:ring-[#C4305A]",
  secondary:
    "bg-[#2547B2] text-white hover:bg-[#1d3a8e] focus-visible:ring-[#2547B2]",
  outline:
    "border-2 border-[#C4305A] text-[#C4305A] hover:bg-[#C4305A] hover:text-white focus-visible:ring-[#C4305A]",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-[#1A3578] focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function getClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className = "") {
  return [
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, variant, size, className, children } = props;
    return (
      <Link href={href} className={getClasses(variant, size, className)}>
        {children}
      </Link>
    );
  }

  const { variant, size, className, children, ...rest } = props as ButtonAsButton;
  return (
    <button {...rest} className={getClasses(variant, size, className)}>
      {children}
    </button>
  );
}
