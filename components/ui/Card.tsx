interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingClass = { sm: "p-4", md: "p-6", lg: "p-8" }[padding];

  return (
    <div
      className={[
        "bg-white rounded-2xl shadow-sm border border-gray-100",
        paddingClass,
        hover ? "transition-shadow duration-200 hover:shadow-md" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
