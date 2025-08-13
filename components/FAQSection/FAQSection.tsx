import { lato, latoLite, oswald, oswaldBold } from "@/app/fonts";
import { ArrowDown } from "lucide-react";
import { FC, useState, useRef, useEffect } from "react";
import SectionImage from "@/public/bg/JMAI -02.jpg"
import PageImage from "@/public/bg/JMAI -01.jpg"
import Image from "next/image";
import CustomImage from "../CustomImage";
import { motion } from "framer-motion";

interface Props {
    asSection: boolean
}

const faqArr = [
    { 
        question: "How do I book a shoot?", 
        answer: "Booking a session is easy! Just email me or reach out via social media to discuss the details, and we’ll start planning your photoshoot." 
    },
    { 
        question: "How long does it take to receive my photos?", 
        answer: "I typically deliver your photos within 7 days, but I always strive to send them as soon as possible." 
    },
    { 
        question: "Do you offer custom packages for events or businesses?", 
        answer: "Yes! I can create personalized packages to fit your event or business needs. Let’s discuss what works best for you." 
    },
    { 
        question: "Do you offer payment plans?", 
        answer: "I don’t have formal payment plans, but I’m open to discussing flexible payment options if needed." 
    },
    { 
        question: "Do you travel for photoshoots or events?", 
        answer: "Yes, I’m available for travel! Travel fees may apply depending on the location." 
    },
    { 
        question: "Do you provide both digital and printed photos?", 
        answer: "I provide a digital collection of all photos from the shoot. If you’d like physical prints, they can be arranged for an additional cost." 
    },
    { 
        question: "What payment methods are available?", 
        answer: "E-transfer is the preferred payment method, but let me know if you need an alternative." 
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
                <h1 className={`agency text-3xl text-center mt-20`}>Frequently Asked Questions</h1>
                <div className="max-w-4xl w-full px-6 md:px-16 lg:px-32 mx-auto p-6 space-y-4">
                    {faqArr.map((faq, index) => (
                        <div key={index} className="border-b mt-10 first:mt-0">
                            <button 
                                className={`w-full text-left text-lg md:text-xl font-medium py-3 focus:outline-none
                                hover:cursor-pointer hover:text-gray-300 transition ease-in-out flex justify-between items-center ${oswald.className}`}
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
