import {
  IconChevronRight,
  IconHome,
  IconLogout,
  IconMenu2,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";

const brand_name = "Brand Name";

const is_dark_mode = true;

const sidebar_menu = [
  {
    id: 1,
    name: "Dashboard",
    slug: "dashboard",
    status: "active",
    icon: <IconHome className="icon" />,
  },
  {
    id: 3,
    name: "Sub Menus",
    slug: "submenus",
    status: "active",
    icon: <IconMenu2 className="icon" />,
    submenu: [
      {
        id: 1,
        name: "Sub menu 1",
        slug: "sub_menu_1",
        status: "active",
        icon: <IconChevronRight className="icon" />,
      },
      {
        id: 1,
        name: "Sub menu 2",
        slug: "sub_menu_2",
        status: "active",
        icon: <IconChevronRight className="icon" />,
      },
    ],
  },
];

const profile_menu = [
  {
    id: 1,
    name: "Profile",
    slug: "prfile",
    status: "active",
    icon: <IconUserCircle className="icon me-2" />,
  },
  {
    id: 2,
    name: "Setting",
    slug: "setting",
    status: "active",
    icon: <IconSettings className="icon me-2" />,
  },
  {
    id: 3,
    name: "Sign Out",
    slug: "sign_out",
    status: "active",
    icon: <IconLogout className="icon me-2" />,
  },
];

const user_details = {
  name: "Alexander Pierce",
  profile_picture: "",
  role: "Admin",
};

export { brand_name, sidebar_menu, profile_menu, is_dark_mode, user_details };
