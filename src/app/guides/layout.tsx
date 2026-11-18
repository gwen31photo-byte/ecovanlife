import type { ReactNode } from "react";
import { EnergyProvider } from "./guide-tools";

export default function GuidesLayout({ children }: { children: ReactNode }) {
  return <EnergyProvider>{children}</EnergyProvider>;
}
