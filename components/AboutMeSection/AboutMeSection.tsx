import { lato, nunito } from "@/app/fonts";
import Image from "next/image";
import { FC } from "react";
import HeroImage from "@/public/pictures/about/Johnson 1.png"
import Link from "next/link";
import { motion } from "framer-motion"

interface Props {
    
}

const AboutMeSection: FC<Props> = (props) => {

    return (   
        <section id="about-me-section" className="grid grid-cols-1 md:grid-cols-5 sm:grid-flow-col sm:h-160">
            <div id="image-wrap" className="col-span-2 sm:h-full overflow-hidden h-96">
                <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full h-full">
                    <Image src={HeroImage} alt="about me photo" 
                    objectFit="cover"
                    quality={75}
                    loading="eager"
                    className="object-cover h-full xl:object-top object-center" />
                </motion.div>
            </div>
            <div id="text-wrap" className="sm:col-span-3 px-10 sm:px-20 grid place-items-center pb-16">
                <div>
                    {/* Centered Text Section */}
                    <motion.div
                    initial={{ opacity: 0, x: 150 }} // Start below the view (50px down) and hidden (opacity 0)
                    whileInView={{ opacity: 1, x: 0 }} // Animate to the original position and opacity 1
                    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                    transition={{ duration: 1 }} // Set the duration for the fly-in effect
                    >
                    <div id="about-text" className="flex flex-col justify-center items-center text-center p-6 md:col-span-7 mt-10">
                        <h1 className={`americain text-black text-3xl md:text-4xl mb-6`}>
                            Hi, I'm Johnson Mai
                        </h1>
                        <p className={`md:text-xl max-w-prose agency ${nunito.className}`}>
                        I’m Johnson Mai, a photographer, content creator, and social media strategist based in Burnaby, BC. My passion lies in capturing authentic moments—whether it’s the intensity of a sports game, the energy of a live event, or the personality behind a brand. With a background in sports media and content creation, I specialize in telling stories through powerful visuals that leave a lasting impact.

                        </p>
                    </div>
                    </motion.div>
                    <div id="button-wrap" className="grid place-items-center mt-5">
                        <Link href="/about">
                            <button className={`${lato.className} rounded-md border-1 border-black px-8 py-5 hover:bg-gray-200 transition ease-in-out hover:scale-105 hover:cursor-pointer`}>See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection