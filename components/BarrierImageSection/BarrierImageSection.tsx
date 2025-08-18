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
            <section
            id="image-barrier-section"
            className="w-full h-48 sm:h-auto"
            style={{ height: `${props.barrierHeight}px` }}
            >                
                <div id="image-container" className="relative h-full overflow-hidden">

                    <div className="w-full h-full relative">
                        <Image
                        src={props.src}
                        alt="hero pic"
                        fill
                        className={`absolute w-full h-full object-cover 
                            ${props.imageTop ? "object-top" : "object-center"}`}
                        priority
                        />
                    </div>
                    {/* Opacity overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
            </section>
        </>
    );
}

export default BarrierImageSection;
