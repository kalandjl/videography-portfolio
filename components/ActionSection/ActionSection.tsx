import { lato } from "@/app/fonts";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
    links: {link: string, title: string}[]
}

const ActionSection: FC<Props> = (props) => {

    return (
        <>
            <motion.div 
            initial={{ opacity: 0, y: 50 }} // Start below the view (50px down) and hidden (opacity 0)
            whileInView={{ opacity: 1, y: 0 }} // Animate to the original position and opacity 1
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
            transition={{ duration: 1 }}
            >
                <section id="action-section" className="h-96 bg-gray-100 flex flex-col justify-center items-center text-center px-6">
                    <h1 className={`text-4xl font-bold text-gray-900 mb-8 ${lato.className}`}>
                        Ready to Get Started?
                    </h1>

                    <div id="links" className="flex items-center gap-12">
                        <Link href={props.links[0].link} className="text-xl font-medium text-gray-800 hover:text-gray-600 transition duration-300 relative group">
                            {props.links[0].title}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <div className="w-[2px] h-12 bg-gray-400"></div>

                        <Link href={props.links[1].link} className="text-xl font-medium text-gray-800 hover:text-gray-600 transition duration-300 relative group">
                            {props.links[1].title}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default ActionSection