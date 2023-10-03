import React, { useEffect, useState } from "react";
import { Button, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const{role} = props;
  const[navigation,setnavigation]=useState([])
  const [isMeetDropdownOpen, setIsMeetDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const toggleMeetDropdown = () => {
    setIsMeetDropdownOpen(!isMeetDropdownOpen);
  };
  const toggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  let location = useLocation();
useEffect(()=>{
  if(role==="admin")
  {
    setnavigation ( [
      {
        title: "Dashboard",
        href: "/starter",
        icon: "bi bi-speedometer2",
      },
      {
        title: "Student Details",
        href: "/alerts",
        icon: "bi bi-bell",
      },
      {
        title: "Payment Details",
        href: "/alerts",
        icon: "bi bi-bell",
      },
      {
        title: "Meet",
        href: "/meet",
        icon: "bi bi-bell",
        submenu: [
          {
            title: "Completed Meet",
            href: "/CompletedMeeting",
          },
          {
            title: "Upcoming Meet",
            href: "/MeetingDetails",
          },
        ],
      },
      {
        title: "Blog",
        icon: "bi bi-patch-check",
        submenu: [
          {
            title: "View Blog",
            href: "/view-blog",
          },
        ],
      },
      {
        title: "Buttons",
        href: "/buttons",
        icon: "bi bi-hdd-stack",
      },
      {
        title: "Cards",
        href: "/cards",
        icon: "bi bi-card-text",
      },
      {
        title: "Grid",
        href: "/grid",
        icon: "bi bi-columns",
      },
      {
        title: "Table",
        href: "/table",
        icon: "bi bi-layout-split",
      },
      {
        title: "Forms",
        href: "/forms",
        icon: "bi bi-textarea-resize",
      },
      {
        title: "Breadcrumbs",
        href: "/breadcrumbs",
        icon: "bi bi-link",
      },
      {
        title: "About",
        href: "/about",
        icon: "bi bi-people",
      },
      {
        title: "Login",
        href: "/LoginPage",
        icon: "bi bi-layout-split",
      },
      {
        title: "SignUp",
        href: "/SignupPage",
        icon: "bi bi-layout-split",
      },
    ]
     );
  }
  else if(role==="instructor")
  {
    setnavigation ( [
      {
        title: "Dashboard",
        href: "/starter",
        icon: "bi bi-speedometer2",
      },
      {
        title: "Student Details",
        href: "/alerts",
        icon: "bi bi-bell",
      },
      {
        title: "Payment Details",
        href: "/alerts",
        icon: "bi bi-bell",
      },
      {
        title: "Create Meet",
        href: "/EditMeeting",
        icon: "bi bi-bell",
      },
      {
        title: "Meet",
        icon: "bi bi-bell",
        submenu: [
          {
            title: "Completed Meet",
            href: "/CompletedMeeting",
          },
          {
            title: "Upcoming Meet",
            href: "/MeetingDetails",
          },
        ],
      },
      {
        title: "Blog",
        icon: "bi bi-patch-check",
        submenu: [
          {
            title: "Create Blog",
            href: "/",
          },
          {
            title: "View Blog",
            href: "/",
          },
        ],
      },
      {
        title: "Buttons",
        href: "/buttons",
        icon: "bi bi-hdd-stack",
      },
      {
        title: "Cards",
        href: "/cards",
        icon: "bi bi-card-text",
      },
      {
        title: "Grid",
        href: "/grid",
        icon: "bi bi-columns",
      },
      {
        title: "Table",
        href: "/table",
        icon: "bi bi-layout-split",
      },
      {
        title: "Forms",
        href: "/forms",
        icon: "bi bi-textarea-resize",
      },
      {
        title: "Breadcrumbs",
        href: "/breadcrumbs",
        icon: "bi bi-link",
      },
      {
        title: "About",
        href: "/about",
        icon: "bi bi-people",
      },
      {
        title: "Login",
        href: "/LoginPage",
        icon: "bi bi-layout-split",
      },
      {
        title: "SignUp",
        href: "/SignupPage",
        icon: "bi bi-layout-split",
      },
    ]
     );
  }
  else{
    setnavigation ( [
      {
        title: "Dashboard",
        href: "/starter",
        icon: "bi bi-speedometer2",
      },
      {
        title: "Meet",
        icon: "bi bi-bell",
        submenu: [
          {
            title: "Completed Meet",
            href: "CompletedMeeting",
          },
          {
            title: "Upcoming Meet",
            href: "MeetingDetails",
          },
        ],
      },
      {
        title: "Blog",
        icon: "bi bi-patch-check",
        submenu: [
          {
            title: "View Blog",
            href: "/view-blog",
          },
        ],
      },
      {
        title: "Buttons",
        href: "/buttons",
        icon: "bi bi-hdd-stack",
      },
      {
        title: "Cards",
        href: "/cards",
        icon: "bi bi-card-text",
      },
      {
        title: "Grid",
        href: "/grid",
        icon: "bi bi-columns",
      },
      {
        title: "Table",
        href: "/table",
        icon: "bi bi-layout-split",
      },
      {
        title: "Forms",
        href: "/forms",
        icon: "bi bi-textarea-resize",
      },
      {
        title: "Breadcrumbs",
        href: "/breadcrumbs",
        icon: "bi bi-link",
      },
      {
        title: "About",
        href: "/about",
        icon: "bi bi-people",
      },
      {
        title: "Login",
        href: "/LoginPage",
        icon: "bi bi-layout-split",
      },
      {
        title: "SignUp",
        href: "/SignupPage",
        icon: "bi bi-layout-split",
      },
    ]
     );
  }

})
   
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              {navi.submenu ? (
                <Dropdown
                  isOpen={navi.title === "Meet" ? isMeetDropdownOpen : (navi.title === "Blog" ? isBlogDropdownOpen : false)}
                  toggle={navi.title === "Meet" ? toggleMeetDropdown : (navi.title === "Blog" ? toggleBlogDropdown : () => {})}
                >
                  <DropdownToggle caret>
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    {navi.submenu.map((subItem, subIndex) => (
                      <DropdownItem key={subIndex}>
                        <Link to={subItem.href}>{subItem.title}</Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              )}
            </NavItem>
          ))}
          <Button
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
