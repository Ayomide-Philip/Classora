import { BsMegaphone } from "react-icons/bs";
import {
  FiGrid,
  FiLayers,
  FiMail,
  FiPieChart,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { FaChalkboard } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

export const sidebarLinks = [
  { icon: FiGrid, label: "Overview", url: "/overview" },
  { icon: BsMegaphone, label: "Annoucements", url: "/announcements" },
  { icon: FaChalkboard, label: "Board", url: "/board" },
  { icon: FiLayers, label: "Courses", url: "/courses" },
  { icon: FiUsers, label: "Students", url: "/students" },
  { icon: FiMail, label: "Messages", url: "/messages" },
  { icon: FiBookOpen, label: "Assignments", url: "/assignments" },
  { icon: FiPieChart, label: "Resources", url: "/resources" },
  { icon: FiSettings, label: "Settings", url: "/settings" },
];
