"use client"
import Image from "next/image"
import ExampleHeroImg from "@/public/layout/example_contact_hero_img.jpg"
import HeroImageSection from "@/components/HeroImageSection"
import { motion } from "framer-motion"
import { lato, latoLite, libertinus, nunito } from "../fonts"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { firestore } from "@/lib/firebase"
import { useState } from "react"

const Home = () => {

        const labelClass = `text-xl text-gray-800 font-thin ${libertinus.className}`;
    const inputClass = `${nunito.className} text-lg border-b-1 py-3 border-gray-800 w-full outline-none text-gray-800 mb-10 font-thin focus:bg-gray-100`;

    let [name, setName] = useState<string | undefined>(undefined);
    let [email, setEmail] = useState<string | undefined>(undefined);
    let [message, setMessage] = useState<string | undefined>(undefined);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent submission first

        const lastSubmit = localStorage.getItem("lastContactFormSubmit");
        const now = Date.now();

        if (lastSubmit && now - parseInt(lastSubmit) < 10_000) {
            const waitTime = Math.ceil((10_000 - (now - parseInt(lastSubmit))) / 1000);
            return alert(`Wait ${waitTime} more second(s) before submitting again.`);
        }

        try {
            await addDoc(collection(firestore, "messages"), {
                name,
                email,
                message,
                createdAt: Timestamp.fromDate(new Date()),
            });

            localStorage.setItem("lastContactFormSubmit", now.toString());
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            <HeroImageSection src={ExampleHeroImg} width={1440} height={1800} title="Contact" />

            <section id="contact-section">
                                <section id="form-section" className="grid sm:grid-flow-col grid-flow-row sm:grid-cols-5 pb-32 pt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // Start below the view (50px down) and hidden (opacity 0)
                        whileInView={{ opacity: 1, x: 0 }} // Animate to the original position and opacity 1
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                        transition={{ duration: 1 }}
                        className="w-full col-span-2 px-20 py-16"
                    >
                        <div id="contact-form-paragraph" >
                            <div id="text-wrap grid gap-12 h-2/3">
                                <h1 className={`text-3xl agency mb-5`}>
                                    Let's Work Together
                                </h1>
                                <p className={`${latoLite.className}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }} // Start below the view (50px down) and hidden (opacity 0)
                        whileInView={{ opacity: 1, y: 0 }} // Animate to the original position and opacity 1
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                        transition={{ duration: 1 }}
                        className="sm:px-16 py-10 col-span-3 grid gap-10"
                    >
                        <div id="contact-form-wrap" >
                            <div id="form-outer" className="px-16 py-16 bg-gray-100 h-min">
                                <form id="contact-form" className="w-full h-full" onSubmit={handleSubmit}>
                                    <div id="name-wrap">
                                        <label htmlFor="name-input" className={labelClass}>Name *</label>
                                        <input
                                            type="text"
                                            id="name-input"
                                            className={inputClass}
                                            onChange={e => setName(e.target.value)}
                                            maxLength={50}
                                            required
                                        />
                                    </div>
                                    <div id="email-wrap">
                                        <label htmlFor="email-input" className={labelClass}>Email *</label>
                                        <input
                                            type="email"
                                            id="email-input"
                                            className={inputClass}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div id="message-wrap" className="mb-10">
                                        <label htmlFor="message-input" className={labelClass}>Message *</label>
                                        <textarea
                                            id="message-input"
                                            className={`${lato.className} text-lg border-b-1 py-3 border-gray-700 w-full outline-none text-gray-600 h-32`}
                                            onChange={e => setMessage(e.target.value)}
                                            minLength={20}
                                            maxLength={200}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`border-1 px-10 py-3 border-gray-900 ${nunito.className} hover:bg-gray-300 transition ease-in-out hover:cursor-pointer`}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </section>
        </>
    )
}

export default Home