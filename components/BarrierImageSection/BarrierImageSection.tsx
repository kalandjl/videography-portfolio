import { ArrowDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Nav from "../Nav";
import { motion } from "framer-motion"
import CustomImage from "../CustomImage";

interface Props {
    src: StaticImageData;
    barrierHeight: number
    imageTop?: boolean;
}

const BarrierImageSection: FC<Props> = (props) => {
    return (
        <>
            <section id="image-barrier-section" className={`w-full sm:h-${props.barrierHeight} h-48 `}>
                <div id="image-container" className="relative h-full overflow-hidden">
                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.02 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="w-full h-full"
                    >
                        <CustomImage 
                            src={props.src} 
                            alt="hero pic"
                            layout="fill"
                            objectFit="cover"
                            className={`absolute w-full h-full object-cover 
                                ${props.imageTop ? "object-top" : "object-center"}`}
                            priority
                        />
                    </motion.div>
                    {/* Opacity overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
            </section>
        </>
    );
}

export default BarrierImageSection;
