import Image from "next/image";
import { FC } from "react";
import HeroImage from "@/public/pictures/_DSC6815.jpg"
import { lato, latoLite } from "@/app/fonts";
import Link from "next/link";
import CustomImage from "../CustomImage";
import { motion } from "framer-motion";

interface Props {


}

const ContactSection: FC<Props> = (props) => {

    return (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start below the view (50px down) and hidden (opacity 0)
            whileInView={{ opacity: 1, y: 0 }} // Animate to the original position and opacity 1
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
            transition={{ duration: 1 }} // Set the duration for the fly-in effect
            className="relative overflow-hidden rounded-lg shadow-lg"
            >
            <section id="contact-section" className="md:h-128 sm:h-96 h-64">
                <div id="image-wrap" className="overflow-hidden h-full relative">

                    <CustomImage src={HeroImage} height={6039} width={4025} alt="hero image" className="object-cover" /> 
                    {/* Overlay section */}
                    <div className="inset-0 absolute">
                        <div className="relative h-full">
                            <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
                            <div id="main-section" className="flex h-full pt-10 md:pt-0">
                                <div id="text-wrap" className="h-full w-min px-20 grid place-items-center z-10 pb-20">
                                    <div className="grid gap-10">
                                        <p className={`text-white ${lato.className} w-max lg:text-5xl md:text-4xl sm:text-3xl text-2xl opacity-100 z-10`}>Let's Get In Touch</p>
                                        <Link href="/contact">
                                            <button className="rounded-sm border-1 border-white px-4 md:px-8 md:py-5 py-2 z-10 md:text-xl text-sm text-white hover:bg-white hover:text-black transition ease-in-out hover:cursor-pointer">
                                                <p className={`w-max ${latoLite.className}`}>Contact Me</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </motion.div>
        </>
    )
}

export default ContactSection