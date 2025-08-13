"use client"
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Nav from "../Nav";
import CustomImage from "../CustomImage";

interface Props {
    src: StaticImageData;
    width: number;
    height: number;
    title: string;
    imageTop?: boolean;
    opacity?: number
}

const HeroImageSection: React.FC<Props> = (props) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleArrowClick = () => {

        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main id="hero-section">
            <section className="h-screen relative">
                <div className={`bg-black opacity-${props.opacity ?? "70"} w-full h-full absolute z-10`}></div>
                <div className="relative w-full h-full">
                    <CustomImage 
                        src={props.src} 
                        height={props.height} 
                        width={props.width} 
                        alt="hero image" 
                        className={`absolute w-full h-full object-cover 
                            ${props.imageTop ? "object-top" : "object-center"}`}
                        loading="eager"
                        priority
                    />
                </div>
            </section>

            {/* Overlay Section */}
            <section className="z-10 absolute top-0 w-full h-screen">
                <Nav />
                <main className="sm:px-32 grid place-items-center relative h-full">
                    <h1 className="font-bold text-5xl text-white h-64 agency">
                        <span className="h-min relative px-10 py-5 z-10">
                            {props.title}
                            <span className="bg-black opacity-50 inset-0 absolute -z-10"></span>
                        </span>
                    </h1>
                    <div id="arrow" className="absolute bottom-0 h-20 mb-16 grid place-items-center">
                        <ArrowDown 
                            onClick={handleArrowClick}
                            stroke="#ffffff" 
                            className={`h-12 w-8 hover:cursor-pointer hover:scale-110 ease-in-out transition ${!hasScrolled ? "animate-bounce" : "opacity-0"}`} 
                        />
                    </div>
                </main>
            </section>
        </main>
    );
};

export default HeroImageSection;
