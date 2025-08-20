import AboutMeSection from "@/components/AboutMeSection";
import ActionArrow from "@/components/ActionArrow";
import InstaVidPromoSection from "@/components/InstaVidPromoSection";
import Nav from "@/components/Nav";
import YTVidPromoSection from "@/components/YTVidPromoSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (    
        <>
            <main id="home-page" className="min-h-[150vh]">

                <section id="nav-wrap" className="absolute inset-0">
                    <Nav theme="light" />
                </section>
                {/* HERO SECTION - Autoplay video background */}
                <section id="hero-section" className="min-h-[150vh] absolute inset-0">
                    <div className="relative w-screen h-[150vh] overflow-x-visible bg-black -z-10">
                        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://pub-ff478df61150464fa538dc7f3632b3de.r2.dev/example_hero_vid.mp4" type="video/mp4" />
                            <source src="https://pub-ff478df61150464fa538dc7f3632b3de.r2.dev/example_hero_vid.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>
                    <div className="absolute inset-0 " id="hero-text-overlay">
                        <div className="grid place-items-center h-screen" id="hero-text-wrap">
                            <div>
                                <h1 className="agency text-6xl text-white">
                                    SHOT BY KYZEC 
                                </h1>
                            </div>
                        </div>
                        <div className="grid place-items-center h-[50vh]">
                            <div className="h-[50vh]">
                                <Link href="/portfolio">
                                    <button className="px-4 py-2 border-white border-2 text-white flex gap-2 transition ease-in-out hover:scale-105 hover:cursor-pointer z-50">
                                        Check out my work
                                        <ArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                
                    </div>
                   <div className="absolute bottom-[50vh] left-1/2 -translate-x-1/2">
                         <ActionArrow navAdjust={false} />
                    </div>                
                </section>
                <div className="h-[calc(150vh-88px)] -z-20"></div>

                <AboutMeSection />

                {/* VIDEO PROMO SECTION - Display & Description  */}
                <YTVidPromoSection src="https://www.instagram.com/p/DMipXacB_n_/" />

            </main>
        </>
    )
}
