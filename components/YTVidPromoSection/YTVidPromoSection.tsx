import { FC } from "react";

interface Props {
    src: string
}

const YTVidPromoSection: FC<Props> = (props) => {
    
    return (
        <>
            <section id="vid-promo-section">
                <div id="section-inner" className="h-[50vh] bg-stone-900 grid grid-cols-5 text-white">
                    <div id="vid-display" className="col-span-2 grid place-items-center">
                        {/* Youtube Link */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PstWTW4vZN8" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div id="vid-description" className="grid place-items-center col-span-3">
                        <div id="vid-description-wrapper" className="px-8 py-8 grid place-items-center w-full text-center">
                            <h1 id="vid-title" className="orpheus text-2xl mb-5">High School Hype Compilation</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )
}

export default YTVidPromoSection