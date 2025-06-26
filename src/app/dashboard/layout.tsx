import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen grid grid-cols-[240px_1fr]">
      <Sidebar />
      <main className="p-5">{children}</main>
    </div>
  );
}
