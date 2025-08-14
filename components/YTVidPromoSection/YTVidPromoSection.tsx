import { FC } from "react";

interface Props {
    src: string
}

const YTVidPromoSection: FC<Props> = (props) => {
    
    return (
        <>
            <section id="vid-promo-section">
                <div id="section-inner" className="h-[30vh] bg-stone-900 grid grid-cols-5 text-white">
                    <div id="vid-display" className="col-span-2">
                        {/* Youtube Link */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div id="vid-description" className="col-span-3 px-5 py-5">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YTVidPromoSection