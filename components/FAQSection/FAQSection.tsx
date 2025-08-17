import { lato, latoLite, libertinus, oswald, oswaldBold } from "@/app/fonts";
import { ArrowDown } from "lucide-react";
import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionImage from "@/public/layout/canvas image 2.jpg"
import PageImage from "@/public/layout/canvas image 2.jpg"
import CustomImage from "../CustomImage";
import { motion } from "framer-motion";

interface Props {
    asSection: boolean
}

const faqArr = [
    { 
        question: "How do I book a video session?", 
        answer: "Booking a video shoot is simple! Reach out via email or social media, and we’ll discuss your project, schedule, and ideas." 
    },
    { 
        question: "How long does it take to receive my edited video?", 
        answer: "I typically deliver edited videos within 10–14 days, depending on the project length and complexity." 
    },
    { 
        question: "Do you offer custom video packages for events or businesses?", 
        answer: "Absolutely! I can create tailored video packages for weddings, corporate events, or promotional content. Let’s find the best fit for your needs." 
    },
    { 
        question: "Do you offer payment plans for video projects?", 
        answer: "While I don’t have formal payment plans, I’m open to discussing flexible options for larger video projects." 
    },
    { 
        question: "Do you travel for on-location video shoots?", 
        answer: "Yes! I’m available for travel. Additional travel fees may apply depending on the location and duration of the shoot." 
    },
    { 
        question: "Do you provide raw footage or only the final video?", 
        answer: "I provide the fully edited final video. Raw footage can also be delivered upon request for an additional fee." 
    },
    { 
        question: "What payment methods are available for videography projects?", 
        answer: "E-transfer is preferred, but I can accommodate other payment methods if necessary." 
    },
];


const FAQSection: FC<Props> = (props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = openIndex === index ? ref.scrollHeight + "px" : "0px";
            }
        });
    }, [openIndex]);

    return (
        <section id="faq-section" className="min-h-128 relative text-white">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="py-20" id="content-wrap"
            >
                <h1 className={`${libertinus.className} text-3xl text-center mt-20`}>Frequently Asked Questions</h1>
                <div className="max-w-4xl w-full px-6 md:px-16 lg:px-32 mx-auto p-6 space-y-4">
                    {faqArr.map((faq, index) => (
                        <div key={index} className="border-b mt-10 first:mt-0">
                            <button 
                                className={`w-full text-left text-lg md:text-xl font-medium py-3 focus:outline-none
                                hover:cursor-pointer hover:text-gray-300 transition ease-in-out flex justify-between items-center ${libertinus.className}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <ArrowDown
                                    className={`transform transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                            // @ts-ignore
                                ref={(el) => (contentRefs.current[index] = el)}
                                className={`overflow-hidden transition-all duration-300 ${latoLite.className}`}
                            >
                                <p className="text-gray-200 py-2">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="absolute inset-0 -z-10">
                <div id="image-wrap" className="h-full relative">
                    <CustomImage src={props.asSection ? SectionImage : PageImage}  alt="background image"
                       layout="fill"
                       objectFit="cover"  // this ensures object-cover behavior
                    className="object-cover" />
                    <div className="absolute inset-0 bg-black opacity-80 "></div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
