import {
  CalendarDays,
  ChartNoAxesColumn,
  LayoutGrid,
  MessageCircleMore,
  NotebookText,
  Settings,
  UsersRound,
} from "lucide-react";
import type { IMenuItem } from "../menu/menu.types";
import { Pages } from "@/config/pages";

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: "Message",
    href: Pages.MESSAGE,
  },
  {
    icon: ChartNoAxesColumn,
    label: "Insight",
    href: Pages.INSIGHT,
  },
  {
    icon: UsersRound,
    label: "Team",
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: "Dashboard",
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookText,
    label: "Dashboard",
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: "Dashboard",
    href: Pages.SETTINGS,
  },
];
