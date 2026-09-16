import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border bg-transparent shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn( className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold font-oswald leading-tight tracking-normal capitalize", className)}
      {...props}
    />
  );
}

export function CardParagraphy({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(`max-w-85 font-sans font-medium leading-relaxed text-white/75`,className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-0", className)} {...props} />;
}