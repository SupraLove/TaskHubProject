"use client";

import { Heading } from "@/components/ui/Heading";
import { SearchField } from "@/components/ui/search-field/SearchField";

export function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <Heading>Dashboard</Heading>
        <SearchField value="" onChange={() => {}} />
      </div>
    </div>
  );
}
