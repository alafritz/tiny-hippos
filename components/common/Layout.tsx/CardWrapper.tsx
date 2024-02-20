import { PropsWithChildren } from "react";

export function CardWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex-col py-5 px-2.5 sm:px-5 space-y-5 rounded-lg bg-foreground">
      {children}
    </div>
  );
}
