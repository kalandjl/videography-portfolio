"use client"
import { lato, roboto } from "@/app/fonts";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { LucideSidebar, Sidebar, SidebarIcon, SidebarOpenIcon, XIcon } from "lucide-react";
import { Bars3 } from "@/app/icons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import CustomImage from "../CustomImage";

interface Props {
    theme?: "dark" | "light";
}

let links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
    { title: "FAQ", href: "/FAQ" }
];

// Static portfolio links
const portfolioLinks = [
    { title: "Folder 1", href: "/portfolio/#" },
    { title: "Folder 2", href: "/portfolio/#" },
    { title: "Folder 3", href: "/portfolio/#" },
];

const Nav: FC<Props> = ({ theme }) => {

    const pathname = usePathname(); // Get current path
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [shuffledPortfolioLinks, setShuffledPortfolioLinks] = useState<any[]>([]);
    let timeoutId: NodeJS.Timeout;

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => setIsDropdownOpen(false), 200); // Small delay to prevent flickering
    };

    useEffect(() => {
        setShuffledPortfolioLinks([...portfolioLinks].sort(() => Math.random() - 0.5).slice(0, portfolioLinks.length + 1));
    }, []); // Shuffle only on client-side

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {

        if (sidebarOpen) {
            document.body.style.height = "100vh"; // Disable scrolling
        } else {
            document.body.style.height = ""; // Re-enable scrolling
        }
    
        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [sidebarOpen]);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
            document.querySelectorAll("#slide-btn").forEach((el) => {
                (el as HTMLElement).style.setProperty("z-index", "10");
            });
        } else {
            document.body.style.overflow = ""; // Re-enable scrolling
            document.querySelectorAll("#slide-btn").forEach((el) => {
                (el as HTMLElement).style.setProperty("z-index", "30");
            });
        }

        return () => {
            document.body.style.overflow = ""; // Cleanup when component unmounts
        };
    }, [sidebarOpen])

    return (
        <>
            <nav id="nav" className={`max-h-22 ${theme === "dark" ? "bg-stone-900" : ""}`}>
                <div id="nav-inner" className="flex lg:px-32 px-10 md:px-20 justify-between h-full items-center">
                    <div id="logo" className="w-32 h-22 grid place-items-center py-2 hover:scale-105 transition ease-in-out">
                        <Link href="/">
                            <div id="image-wrap" className="relative w-max h-max">
                                <div className="h-10 w-10 bg-red-500 opacity-20 rounded-md" id="placeholder-logo"></div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div id="links" className="items-center hidden md:flex">
                            {links.map((link, i) =>
                                link.title === "Portfolio" ? (
                                    <div
                                        key={i}
                                        className="relative border-r-1 border-gray-500 lg:px-5 group"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link href={link.href} className="relative">
                                            <p className={`text-white lg:text-lg font-semibold px-4 py-2 ${link.href != pathname ? "hover:bg-stone-800": ""} group-hover:bg-stone-800 rounded-sm transition ${roboto.className}`}>
                                                {link.title} 
                                            </p>
                                            {link.href === pathname && (
                                                <div className="absolute bottom-0 h-1 px-3 right-0 left-0 block">
                                                    <div className="relative h-full">
                                                        <motion.div
                                                            initial={{ opacity: 0, right: "100%" }} // Start below the view (50px down) and hidden (opacity 0)
                                                            whileInView={{ opacity: 1, right: "0" }} // Animate to the original position and opacity 1
                                                            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                                                            transition={{ duration: 0.7 }} // Set the duration for the fly-in effect
                                                            className="h-full bg-stone-200 block absolute top-0 bottom-0 left-0"
                                                        >
                                                            <span></span>
                                                        </motion.div>
                                                    </div>
        
                                                </div>
                                            )}
                                        </Link>
                                        {/* Dropdown Menu */}
                                        <div className={`${roboto.className} z-20 absolute left-0 mt-2 w-32 bg-stone-800 rounded-sm shadow-lg overflow-hidden transition-all duration-200 ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                                            {shuffledPortfolioLinks.map((item: any, index: number) => (
                                                <Link key={index} href={item.href}>
                                                    <p className={`text-white font-semibold px-4 py-2 transition lg:text-xl hover:bg-stone-900
                                                    }`}>
                                                        {item.title}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={link.href} key={i} className="border-r border-gray-500 last:border-r-0 lg:px-5 relative">
                                        <p className={`text-white font-semibold px-4 py-2 ${link.href !== pathname ? "hover:bg-stone-800": ""} rounded-sm transition ${roboto.className} lg:text-xl`}>
                                            {link.title}
                                        </p>
 
                                        {link.href === pathname && (
                                            <div className="absolute bottom-1 h-0.5 px-7 right-0 left-0 block">
                                                <div className="relative h-full">
                                                    <motion.div
                                                        initial={{ opacity: 0, right: "100%" }} // Start below the view (50px down) and hidden (opacity 0)
                                                        whileInView={{ opacity: 1, right: "0" }} // Animate to the original position and opacity 1
                                                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                                                        transition={{ duration: 0.7 }} // Set the duration for the fly-in effect
                                                        className="h-full bg-stone-200 block absolute top-0 bottom-0 left-0"
                                                    >
                                                        <span></span>
                                                    </motion.div>
                                                </div>
     
                                            </div>
                                        )}
                                </Link>
                                )
                            )}
                        </div>
                        <div id="sidebar-btn" className="sm:flex md:hidden w-10 h-full hover:cursor-pointer" 
                        onClick={() => setSidebarOpen(true)}>
                            {Bars3}
                        </div>
                    </div>
                </div>
            </nav>
            <div
            id="sidebar"
            className={`${sidebarOpen ? "z-20" : "hidden"} px-10 -z-10 py-5 fixed inset-0 bg-stone-800 scroll`}
            >
            {/* Background Image */}
            
            <div className="absolute top-0 -bottom-10 right-0 left-0 bg-black opacity-80 z-40"></div>

            {/* Inner Content */}
            <div id="inner" className="h-full relative z-50">
                <p className="text-white hover:scale-105 hover:cursor-pointer" onClick={() => setSidebarOpen(false)}>
                    <XIcon stroke="#ffffff" />
                </p>

                <div id="links" className="grid gap-3 pt-10">
                {links.map((link, i) => (
                    <Link key={i} href={link.href} className={`text-white ${lato.className} text-lg`}>
                        {link.title}
                    </Link>
                ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default Nav;
