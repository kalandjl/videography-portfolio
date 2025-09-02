import { lato, latoLite, nunito, oswald, shoulders } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
    
}

let links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Clients", href: "/clients" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" }
];


const Footer: FC<Props> = (props) => {

    return (
        <>
            <footer id="footer" className="px-4 sm:px-10 grid py-5 gap-5">
                <div id="links" className="sm:flex hidden gap-3">
                    {links.map((link, i) => (
                        <Link href={link.href} key={i} className="hover:scale-105 hover:bg-gray-100 transition ease-in-out">
                            <p className={`text-black font-semibold px-4 py-2 rounded-lg transition ${lato.className}`}>
                                {link.title}
                            </p>
                        </Link>
                    ))}
                </div>
                <div id="copyright" className="px-10 w-full text-center">
                <p className={`${latoLite.className} text-sm text-gray-700`}>
                    © {new Date().getFullYear()} Kyzec Urrutia{" "}
                </p>
                <div className="grid place-items-center sm:flex mt-5">
                    <div id="icons" className="flex gap-3">
                        <Link 
                            href="https://www.instagram.com/krushotit" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram Profile"
                            className="w-8 h-8 flex items-center justify-center"
                        >
                            <Image 
                                src="/icons/insta-logo.png" 
                                width={32} 
                                height={32} 
                                alt="Instagram logo" 
                                className="w-15 h-15 object-contain hover:scale-115 transition ease-in-out"
                            />
                        </Link>
                        <Link 
                            href="https://www.github.com/kalandjl" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub Profile"
                            className="w-5 flex items-center justify-center hover:scale-115 transition ease-in-out"
                        >
                            <Image 
                                src="/icons/github.png" 
                                width={32} 
                                height={32} 
                                alt="GitHub logo" 
                                className="w-8 h-8 object-contain"
                            />
                        </Link>
                    </div>
                </div>


            </div>
            </footer>
        </>
    )
}

export default Footer