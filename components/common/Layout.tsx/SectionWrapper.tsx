import { PropsWithChildren } from "react";

export function SectionWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-y-2.5">{children}</div>;
}
