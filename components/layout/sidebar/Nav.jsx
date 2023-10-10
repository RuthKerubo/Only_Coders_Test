import {
  CloudIcon, DocumentIcon, FolderIcon, UserGroupIcon, ShoppingBagIcon, ShieldCheckIcon, UserCircleIcon, 
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };

   //if menu has chile menu then  use seperate array
   const childMenu = [
    {
      subMenuTitle: "child One",
      linkHref: "/"
    },
    {
      subMenuTitle: "child Two",
      linkHref: "/"
    },
    {
      subMenuTitle: "child Three",
      linkHref: "/"
    }
  ];

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }
  }, [sidebarOutsideClick]);
  //console.log("sidebar Nav", sidebarOutsideClick)
  return (
    <>
      <nav className="flex flex-col mx-4 my-6 space-y-4">
       

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Category"
          subMenu={false}
          subMenuArray={null}
        >
          <CloudIcon className="h-10" />
        </NavItem> 

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Sub-Category"
          subMenu={false}
          subMenuArray={null}
        >
          <DocumentIcon className="h-10" />
        </NavItem> 

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Group Users"
          subMenu={false}
          subMenuArray={null}
        >
          <UserGroupIcon className="h-10" />
        </NavItem>

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Shopping Bag"
          subMenu={false}
          subMenuArray={null}
        >
          <ShoppingBagIcon className="h-10" />
        </NavItem> 

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="User"
          subMenu={false}
          subMenuArray={null}
        >
          <UserCircleIcon className="h-10" />
        </NavItem> 

        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Shield"
          subMenu={false}
          subMenuArray={null}
        >
          <ShieldCheckIcon className="h-10" />
        </NavItem> 

        {/* this menu has child Menu     */}
        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Folder"
          subMenu={true}
          subMenuArray={childMenu}
        >
          <FolderIcon className="h-10" />
        </NavItem> 
       
      </nav>
    </>
  );
};

export default Nav;
