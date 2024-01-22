import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { profile_menu, is_dark_mode, user_details } from "../themeConfig";
import { getRandomColor, createImageFromInitials } from "../Utils";
import Avatar from "./Avatar";

const Header = () => {
  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", is_dark_mode == true ? "dark" : "light");
    }
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") == "dark" ? true : false
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(!darkMode);
    // Update the data-bs-theme attribute in index.html
    const themeAttribute = newDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", themeAttribute);
    localStorage.setItem("mode", themeAttribute);
    // Update the data-bs-theme attribute when component mounts
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <Navbar
      as="header"
      expand="md"
      className="d-none d-lg-flex d-print-none shadow sticky-top"
    >
      <Container fluid>
        <Nav className="flex-row order-md-last">
          <Nav className="d-none d-md-flex">
            <>
              <Dropdown className="nav-link cursor-pointer">
                <div className="me-3">
                  {darkMode ? (
                    <IconSun onClick={toggleDarkMode} />
                  ) : (
                    <IconMoon onClick={toggleDarkMode} />
                  )}
                </div>

                <Dropdown.Toggle
                  as={"a"}
                  bsPrefix={`nav-link d-flex lh-1 text-reset p-0
                  }`}
                >
                  <Avatar
                    name={user_details.name}
                    profilePicture={user_details.profile_picture}
                  ></Avatar>

                  <div className="d-none d-xl-block ps-2">
                    <div>{user_details.name}</div>
                    <div className="mt-1 small text-muted">
                      {user_details.role}
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="end"
                  className="dropdown-menu-end dropdown-menu-arrow"
                >
                  {profile_menu.map((item, i) => {
                    if (item.value === "My Profile") {
                      return (
                        <Dropdown.Item key={`dd-${i}`}>
                          {item.icon}
                          {item.value}
                        </Dropdown.Item>
                      );
                    }
                    return (
                      <Dropdown.Item
                        key={`dd-${i}`}
                        as={NavLink}
                        to={item.slug}
                      >
                        {item.icon}
                        {item.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </>
          </Nav>
        </Nav>
        <Navbar.Collapse></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
