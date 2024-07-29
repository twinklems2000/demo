import Calender from "../components/pages/Calender";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BookIcon from "@mui/icons-material/Book";

export const routeData = [
  {
    path: "/",
    element: <Calender />,
    children: [],
    header: "",
    location: "/",
  },
  {
    path: "/my-bookings",
    element: <h1>My Bookings</h1>,
    children: [],
    header: "",
    location: "/my-bookings",
  },
  {
    path: "/find-collegues",
    element: <h1>Find Collegues</h1>,
    children: [],
    header: "",
    location: "/find-collegues",
  },
  {
    path: "/employee-roles",
    element: <h1>Employee Roles</h1>,
    children: [],
    header: "",
    location: "/employee-roles",
  },
  {
    path: "/settings",
    element: <h1>Settings</h1>,
    children: [],
    header: "",
    location: "/settings",
  },
];

export const sidebarData = [
  {
    name: "Calender",
    navigate: "/",
    icon: <LogoutIcon />,
  },
  {
    name: "My Bookings",
    navigate: "/my-bookings",
    icon: <BookIcon />,
  },
  {
    name: "Find Collegues",
    navigate: "/find-collegues",
    icon: <PersonSearchIcon />,
  },
  {
    name: "Employee Roles",
    navigate: "/employee-roles",
    icon: <PersonAddIcon />,
  },
  {
    name: "Settings",
    navigate: "/settings",
    icon: <SettingsSuggestIcon />,
  },
];

