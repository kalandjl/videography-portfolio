import { FC, useEffect, useState } from "react";
import HeroImage from "@/public/pictures/_DSC9997-Enhanced-NR.jpg"
import CardImage1 from "@/public/pictures/_DSC2941.jpg"
import CardImage2 from "@/public/graphics/Senior day post.jpg"
import CardImage3 from "@/public/portraits/JMAi THEATRE HEADSHOTS-48.jpg"
import Image from "next/image";
import { lato, latoLite, oswald } from "@/app/fonts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"
import GalleryCard from "./GalleryCard";
import { getUniqueRandomNumbers } from "@/lib/num";
import CustomImage from "../CustomImage";

interface Props {

}

let portfolioSections = [
    {
        src: CardImage1,
        height: 6155,
        width: 3902,
        link: "/portfolio/sports",
        title: "Sports"
    },
    {
        src: CardImage2,
        height: 7008,
        width: 4672,
        link: "/portfolio/graphics",
        title: "Graphics"
    },
    {
        src: CardImage3,
        width: 4248, 
        height: 6372,
        link: "/portfolio/portraits",
        title: "Portraits"
    },
]

const PortfolioSection: FC<Props> = (props) => {

    let [shuffledPortfolioLinks, setShuffledPortfolioLinks] = useState<{[x: string]: any}[]>([])

    useEffect(() => {

        const nums = getUniqueRandomNumbers(2, portfolioSections.length)

        setShuffledPortfolioLinks(nums.map(num => portfolioSections[num - 1]))
    }, [])

    return (
        <>
            <section id="portfolio-section" className="h-128 grid md:grid-cols-3 grid-cols-1 grid-flow-col overflow-hidden">
                <div id="image-wrap" className="overflow-hidden h-full relative">
                    <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-full h-full">
                        <Image src={HeroImage} height={6039} width={4025} alt="hero image" className="object-cover h-full hover:scale-105" fetchPriority="high" loading="eager" />
                    </motion.div>
                    {/* Overlay section */}
                    <div className="inset-0 absolute">
                        <div className="relative h-full">
                            <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
                            <div id="main-section" className="flex h-full">
                                <div id="text-wrap" className="h-full w-min px-20 grid place-items-center z-10 pb-20">
                                    <div className="grid gap-10">
                                        <p className={`text-white ${oswald.className} w-max text-3xl opacity-100 z-10`}>Check Out My Work</p>
                                        <Link href="/portfolio" className="flex gap-2 transition duration-300 relative group w-min">
                                            <p className={`w-max ${latoLite.className} text-white text-xl hover:text-gray-200`}>Portfolio
                                            </p>
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full"></span>

                                            <ArrowRight stroke="#ffffff" className="mt-1"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {shuffledPortfolioLinks.map((portfolioLink, i) => (
                    <div className="hidden md:block max-h-128" key={i}>
                        <GalleryCard src={portfolioLink.src} width={portfolioLink.width} height={portfolioLink.height} 
                        link={portfolioLink.link} title={portfolioLink.title} />
                    </div>
                ))}
            </section>
        </>
    )
}

export default PortfolioSection