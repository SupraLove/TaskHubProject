import Link from "next/link";
import { MAIN_MENU } from "./data/main-menu.data";

export function SidebarMenu() {
  return (
    <nav className="mb-10 mt-3">
      <ul className="space-y-5 pl-3">
        {MAIN_MENU.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-neutral-500 flex items-center dark:text-white gap-2 hover:dark:text-primary hover:text-neutral-800 transition-colors justify-between"
            >
              <span className="flex items-center gap-2">
                <item.icon size={20} />
                <span>{item.label}</span>
              </span>

              {item.label === "Message" && (
                <span className="bg-purple-100 px-2 rounded-lg  text-sm text-primary">
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
