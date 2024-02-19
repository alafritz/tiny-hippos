import { PropsWithChildren } from "react";

export function ColumnWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col space-y-5">{children}</div>;
}
