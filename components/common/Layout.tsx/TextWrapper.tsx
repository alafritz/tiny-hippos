import { PropsWithChildren } from "react";

export function TextWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col w-full gap-y-1">{children}</div>;
}
