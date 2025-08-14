import ActionArrow from "@/components/ActionArrow";

export default function Home() {
    return (    
        <>
            <main id="home-page" className="h-screen">
                <section id="hero-section" className="h-screen absolute inset-0 -z-10 overflow-hidden">
                    <video src="/layout/example_hero_vid.mp4" autoPlay loop muted className="absolute" />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 grid place-items-center" id="hero-text-overlay">
                        <div id="hero-text-wrap">
                            <h1 className="agency text-6xl text-white">
                                SHOT BY KYZEC 
                            </h1>
                        </div>
                    </div>
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                         <ActionArrow navAdjust={false} />
                    </div>                
                </section>
            </main>
        </>
    )
}
