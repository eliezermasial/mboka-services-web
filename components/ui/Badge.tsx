import type {ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string
}
export function Badge({ className, children }: BadgeProps) {
  return (
    <div className={cn(`absolute left-4 top-4 z-10`,className)}>
      <span className={cn(`inline-flex bg-gold rounded-md font-bold px-2 py-1
        tracking-[0.12em] text-[11px] uppercase text-primary`)}
      >
        {children}
      </span>
    </div>
  );
}