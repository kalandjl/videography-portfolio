"use client";

import { lato, roboto } from "@/app/fonts";
import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, ChevronDown } from "lucide-react";
import { Bars3 } from "@/app/icons";

interface Props {
  theme?: "dark" | "light";
  text?: "dark" | "light";
}

interface DropdownItem {
  href: string;
  title: string;
}

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Videography", href: "/videos", hasDropdown: true },
  { title: "Photography", href: "/photos", hasDropdown: true },
  { title: "Contact", href: "/contact" },
];

const Nav: FC<Props> = ({ theme, text }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [videographyFolders, setVideographyFolders] = useState<DropdownItem[]>([]);
  const [photographyFolders, setPhotographyFolders] = useState<DropdownItem[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();

        setVideographyFolders([
          ...new Set(data.videos.map((v: any) => v.folder)),
        ].map((f:any) => ({ 
          href: `/video/${f.toLowerCase().replace(" ", "_")}`, 
          title: (f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, ' ')).replace("_", " ")
        })));

        setPhotographyFolders([
          ...new Set(data.photos.map((p: any) => p.folder)),
        ].map((f:any) => ({ 
          href: `/photo/${f.toLowerCase().replace(" ", "_")}`, 
          title: f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, ' ')
        })));
      } catch (err) {
        console.error("Failed to load portfolio data", err);
      }
    }
    loadData();
  }, []);

  const handleDropdownEnter = (linkTitle: string) => {

    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(linkTitle);
  };

  const handleDropdownLeave = () => {
    
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const getDropdownItems = (linkTitle: string): DropdownItem[] => {
    switch (linkTitle) {
      case "Videography":
        return videographyFolders;
      case "Photography":
        return photographyFolders;
      default:
        return [];
    }
  };

  const isLinkActive = (link: any) => {
    if (link.hasDropdown) {
      return pathname.startsWith(link.href);
    }
    return pathname === link.href;
  };

  return (
    <>
      <nav
        id="nav"
        className={`z-50 relative max-h-22 ${
          theme === "dark" ? "bg-stone-900" : ""
        }`}
      >
        <div className="flex lg:px-32 px-10 md:px-20 justify-between h-full items-center">
          {/* Logo */}
          <div className="w-32 h-22 grid place-items-center py-2 hover:scale-105 transition">
            <Link href="/">
              <div className="relative w-max h-max">
                <div className="h-10 w-10 bg-red-500 opacity-20 rounded-md" />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div>
            <div id="links" className="items-center hidden md:flex">
              {links.map((link, i) => {
                const isActive = isLinkActive(link);
                const dropdownItems = getDropdownItems(link.title);
                const hasItems = dropdownItems.length > 0;

                return (
                  <div
                    key={i}
                    className="relative border-r border-gray-500 lg:px-3 last:border-r-0"
                    onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.title)}
                    onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                  >
                    <Link href={link.href} className="block">
                      <div
                        className={`
                          flex items-center gap-1 px-4 py-3 rounded-lg transition-all duration-200
                          ${text === "dark" ? "text-black" : "text-white"} 
                          font-semibold lg:text-xl ${roboto.className}
                          ${
                            isActive
                              ? text === "dark"
                                ? "bg-stone-200 text-stone-800"
                                : "bg-stone-700 text-stone-100"
                              : text === "dark"
                              ? "hover:bg-stone-100"
                              : "hover:bg-stone-800"
                          }
                        `}
                      >
                        <span>{link.title}</span>
                        {link.hasDropdown && (
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              activeDropdown === link.title ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                    </Link>

                    {/* Dropdown Menu */}
                    {link.hasDropdown && hasItems && (
                      <AnimatePresence>
                        {activeDropdown === link.title && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-2 min-w-48 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden z-50"
                            onMouseEnter={() => handleDropdownEnter(link.title)}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="py-2">
                              {dropdownItems.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                  <div className="px-4 py-3 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors duration-150 font-medium">
                                    {item.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                            {/* Arrow pointer */}
                            <div className="absolute -top-1 left-6 w-2 h-2 bg-white dark:bg-stone-800 border-l border-t border-stone-200 dark:border-stone-700 rotate-45"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Sidebar Btn */}
            <div
              id="sidebar-btn"
              className="sm:flex md:hidden w-10 h-full hover:cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            >
              {Bars3}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            id="sidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-stone-900 shadow-2xl"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <XIcon size={24} />
                </button>

                {/* Mobile Links */}
                <div className="pt-16 space-y-2">
                  {links.map((link, i) => {
                    const dropdownItems = getDropdownItems(link.title);
                    const isActive = isLinkActive(link);
                    
                    return (
                      <div key={i} className="space-y-1">
                        <Link href={link.href} onClick={() => setSidebarOpen(false)}>
                          <div
                            className={`
                              flex items-center justify-between px-4 py-3 rounded-lg transition-colors
                              ${isActive ? "bg-stone-800 text-stone-100" : "text-stone-300 hover:bg-stone-800 hover:text-white"}
                              ${lato.className} text-lg font-medium
                            `}
                          >
                            <span>{link.title}</span>
                            {link.hasDropdown && dropdownItems.length > 0 && (
                              <ChevronDown size={18} />
                            )}
                          </div>
                        </Link>
                        
                        {/* Mobile Dropdown Items */}
                        {link.hasDropdown && dropdownItems.length > 0 && (
                          <div className="ml-4 space-y-1">
                            {dropdownItems.map((item, idx) => (
                              <Link key={idx} href={item.href} onClick={() => setSidebarOpen(false)}>
                                <div className="px-4 py-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-lg transition-colors text-base">
                                  {item.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;