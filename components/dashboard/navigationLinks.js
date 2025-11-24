import { BsMegaphone } from "react-icons/bs";
import {
  FiCalendar,
  FiGrid,
  FiLayers,
  FiMail,
  FiPieChart,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export const sidebarLinks = [
  { icon: FiGrid, label: "Overview", url: "/overview" },
  { icon: BsMegaphone, label: "Annoucements", url: "/announcements" },
  { icon: FiLayers, label: "Courses", url: "/courses" },
  { icon: FiUsers, label: "Students", url: "/students" },
  { icon: FiMail, label: "Messages", url: "/messages" },
  { icon: FiCalendar, label: "Calendar", url: "/calendar" },
  { icon: FiPieChart, label: "Analytics", url: "/analytics" },
  { icon: FiSettings, label: "Settings", url: "/settings" },
];
