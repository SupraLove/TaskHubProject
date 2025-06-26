import { ChevronDown } from "lucide-react";
import { PROFILE } from "./data/profile.data";

export function SidebarProfile() {
  return (
    <div className="mb-7 flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-full" />
      <div>
        <div className="font-medium">{PROFILE.name}</div>
        <div className="opacity-60 text-xs font-medium">{PROFILE.email}</div>
      </div>
      <div className="ml-1">
        <ChevronDown size={16} className="opacity-60" />
      </div>
    </div>
  );
}
