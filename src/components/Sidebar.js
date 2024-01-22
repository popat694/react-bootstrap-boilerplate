import React, { useState } from "react";
import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebar_menu, brand_name } from "../themeConfig";

const Sidebar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [isOpen, setIsOpen] = useState({
    show: false,
    place: "",
  });
  const handleToggle = (isOpen, meta, item) => {
    const hasItems = currentUrl.includes(item);
    setIsOpen({
      show: hasItems ? true : isOpen,
      place: item,
    });
  };

  const handleSelect = (item) => {
    setTimeout(() => {
      setIsOpen({
        show: true,
        place: item,
      });
    }, 0);
  };
  return (
    <Navbar
      as={"aside"}
      collapseOnSelect
      expand="lg"
      className="shadow navbar-vertical overflow-y-auto"
    >
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Brand as={"h1"}>
          <Link to="/">
            <div className="d-inline-flex">
              <img height={36} src="/logo192.png" className="me-2"></img>
              <h1>{brand_name}</h1>
            </div>
          </Link>
        </Navbar.Brand>
        <Nav as={"div"} className="flex-row d-lg-none"></Nav>
        <Navbar.Collapse>
          <Nav as="ul" className="pt-lg-3">
            {sidebar_menu.map((item) => {
              return (
                <NavItem as="li" key={item.slug}>
                  {item.submenu ? (
                    <NavDropdown
                      title={
                        <>
                          <span className="nav-link-icon">{item.icon}</span>
                          <span className="nav-link-title">{item.name}</span>
                        </>
                      }
                      show={isOpen.place === item.slug && isOpen.show}
                      onToggle={(...args) => handleToggle(...args, item.slug)}
                      onSelect={() => handleSelect(item.slug)}
                    >
                      <div className="dropdown-menu-columns">
                        <div className="dropdown-menu-column">
                          {item.submenu.map((subitem) => {
                            return (
                              <NavDropdown.Item
                                key={subitem.id}
                                as={NavLink}
                                to={`${item.slug}/${subitem.slug}`}
                              >
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
                                  {subitem.icon}
                                </span>
                                {subitem.name}
                              </NavDropdown.Item>
                            );
                          })}
                        </div>
                      </div>
                    </NavDropdown>
                  ) : (
                    <Nav.Link as={NavLink} to={item.slug}>
                      <span className="nav-link-icon">{item.icon}</span>
                      <span className="nav-link-title">{item.name}</span>
                    </Nav.Link>
                  )}
                </NavItem>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
