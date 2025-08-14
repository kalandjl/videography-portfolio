import ActionArrow from "@/components/ActionArrow";

export default function Home() {
    return (    
        <>
            <main id="home-page" className="min-h-[150vh]">
                <section id="hero-section" className="min-h-[150vh] absolute inset-0 -z-10">
                    <div className="relative w-screen h-[150vh] overflow-x-visible bg-black">
                        <video src="/layout/example_hero_vid.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 grid place-items-center h-screen" id="hero-text-overlay">
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
